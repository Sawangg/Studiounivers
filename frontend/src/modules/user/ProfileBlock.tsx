"use client";

import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { User } from "@type/User";
import { apiEndpoint } from "@lib/constants";
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
    <section className="w-full bg-white-100 px-5 pb-10 md:px-40 2xl:pt-6 3xl:pt-16">
      <h1 className="mb-4 mt-4 font-title text-2xl md:mb-10 md:text-5xl">Votre profil</h1>
      <div>{user.username}</div>
      <div>
        <Button color="secondary" onClick={logout}>
          Déconnexion
        </Button>
      </div>
    </section>
  );
};
