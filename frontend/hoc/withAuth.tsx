import { GetServerSidePropsContextUser } from "../types/GetServerSidePropsContextUser";
import { apiEndpoint } from "../lib/constants";
import { User } from "../types/User";
import axios from "axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const withAuth =
    (gssp: any, redirect = false) =>
    async (context: GetServerSidePropsContextUser) => {
        try {
            const rep = await axios({
                method: "get",
                url: `${apiEndpoint}/api/auth`,
                headers: context.req ? { cookie: context.req.headers.cookie! } : undefined,
            });

            if (!rep.data) throw new Error("No Token");

            const user = rep.data as User;
            context.user = user;

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
