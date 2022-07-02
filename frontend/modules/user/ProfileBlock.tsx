import axios from "axios";
import { useRouter } from "next/router";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { apiEndpoint } from "../../lib/constants";
import { User } from "../../types/User";
import { Button } from "../../ui/Button";

export type ProfileBlockProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    user: User;
};

export const ProfileBlock: React.FC<ProfileBlockProps> = ({ user }) => {
    const router = useRouter();

    const logout = async () => {
        await axios.delete(`${apiEndpoint}/api/auth/logout`, { withCredentials: true });
        router.push("/");
    };

    return (
        <div>
            {user.username}
            <Button color="secondary" onClick={logout}>Déconnexion</Button>
        </div>
    );
};
