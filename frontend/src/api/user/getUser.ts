import { fetchAuth } from "@api/fetchAuth";
import { User } from "@type/User";

export const getUser = async (): Promise<User | null> => {
  const res = await fetchAuth("/auth");
  return res as User;
};
