import { GetServerSidePropsContext } from "next";
import { User } from "./User";

export interface GetServerSidePropsContextUser extends GetServerSidePropsContext {
    user: User | null;
}
