import { GetServerSidePropsContextUser } from "@type/GetServerSidePropsContextUser";
import { apiEndpoint } from "@lib/constants";
import { User } from "@type/User";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const withAuth =
    (gssp: any, redirect = false) =>
    async (context: GetServerSidePropsContextUser) => {
        try {
            const res = await fetch(`${apiEndpoint}/api/auth`, {
                headers: context.req ? { cookie: context.req.headers.cookie! } : undefined,
            });
            const data = await res.json();
            if (res.status === 401) throw new Error("No Token");
            context.user = data as User;

            return gssp(context);
        } catch {
            context.user = null;

            if (redirect) {
                return {
                    redirect: {
                        destination: "/login",
                        permanent: false,
                    },
                };
            }

            return gssp(context);
        }
    };

export const withAuthSsr = (handler: unknown) => withAuth(handler);
export const withAuthSsrRedirection = (handler: unknown) => withAuth(handler, true);
