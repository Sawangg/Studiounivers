import { GetServerSidePropsContext } from "next";
import { User } from "@type/User";

export type GetServerSidePropsContextUser = {
    user: User | null;
} & GetServerSidePropsContext;
