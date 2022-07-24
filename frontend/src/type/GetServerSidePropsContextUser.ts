import { GetServerSidePropsContext } from "next";
import { User } from "@type/User";

export interface GetServerSidePropsContextUser extends GetServerSidePropsContext {
    user: User | null;
}
