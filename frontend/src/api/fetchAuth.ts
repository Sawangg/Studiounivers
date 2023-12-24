import { cookies } from "next/headers";
import { apiEndpoint, authCookieName } from "@lib/constants";

// Only works on server components
export const fetchAuth = async (url: string): Promise<unknown | null> => {
  const nextCookies = cookies();
  const tokens = nextCookies.get(authCookieName);
  if (!tokens) return null;
  const parsedTokens = JSON.parse(tokens.value.split("j:")[1]);

  try {
    const res = await fetch(`${apiEndpoint}${url}`, {
      headers: { Authorization: `Bearer ${parsedTokens.access_token}` },
    });
    if (!res.ok) throw new Error("Could't perform auth fetch");
    return res.json();
  } catch {
    return null;
  }
};
