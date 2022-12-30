import { User } from "@type/User";
import { fetchAuth } from "@api/fetchAuth";

export const getUser = async (): Promise<User | null> => {
    const res = await fetchAuth("/auth");
    return res as User;
};
