"use client";

import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { apiEndpoint } from "@lib/constants";
import { User } from "@type/User";
import { Button } from "@ui/Button";

export type ProfileBlockProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    user: User;
};

export const ProfileBlock: React.FC<ProfileBlockProps> = ({ user }) => {
    const logout = async () => {
        await fetch(`${apiEndpoint}/auth/logout`, {
            method: "DELETE",
            credentials: "include",
        });
        window.location.href = "/"; // Router not suited here
    };

    return (
        <section className="flex w-full flex-col gap-6 md:px-28 md:py-20">
            <div>{user.username}</div>
            <div>
                <Button color="secondary" onClick={logout}>
                    Déconnexion
                </Button>
            </div>
        </section>
    );
};
