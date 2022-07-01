import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiEndpoint } from "../../lib/constants";
import { useRouter } from "next/router";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { NotificationType, useNotifications } from "../../stores/useNotifications";

export const LoginBlock: React.FC = () => {
    const router = useRouter();
    const [loginState, setLoginState] = useState({ username: "", pwd: "" });
    const { addNotification } = useNotifications();

    const connectClick = () => {
        addNotification("Test", NotificationType.SUCCESS);

        axios.post(`${apiEndpoint}/api/auth/login`, { username: loginState.username, password: loginState.pwd }, { withCredentials: true }).then(rep => {
            if (rep.status === 201) {
                setLoginState({ username: "", pwd: "" });
                router.push("/");
            } else {
                setLoginState({ username: loginState.username, pwd: "" });
            }
        }).catch(() => {
            setLoginState({ username: loginState.username, pwd: "" });
        });
    };

    useEffect(() => {
        window.addEventListener("keydown", e => { if (e.key === "Enter") connectClick(); });
        return () => {
            window.removeEventListener("keydown", e => { if (e.key === "Enter") connectClick(); });
        };
    });

    return (
        <div className="flex flex-col justify-center items-center w-full my-14">
            <div className="flex flex-col justify-center items-center w-1/2 my-8">
                <h1 className="font-title text-2xl self-start mb-4">Se connecter</h1>
                <hr className="w-[calc(100%-3.5rem)] text-white-200 lg:visible md:invisible sm:invisible mb-8" />
                <div className="w-1/2">
                    <Input color="primary" placeholder="email" type="email"
                        onChange={e => setLoginState({ ...loginState, username: e.target.value })} />
                    <Input color="primary" placeholder="password" type="password"
                        onChange={e => setLoginState({ ...loginState, pwd: e.target.value })} />
                </div>
                <div className="w-5/6 flex justify-between items-center self-end mt-9">
                    <p onClick={() => router.push("/register")}>Register</p>
                    <Button color="secondary" onClick={connectClick}>Connecter</Button>
                </div>
            </div>
        </div>
    );
};
