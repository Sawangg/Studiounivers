import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { apiEndpoint } from "../../lib/constants";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";

export const LoginBlock: React.FC = () => {
    const router = useRouter();
    const [loginState, setLoginState] = useState({ username: "", pwd: "" });

    const connectClick = () => {
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
        window.addEventListener("keydown", e => { if (e.key === "Enter") connectClick(); }, { once: true });
        return () => {
            window.removeEventListener("keydown", e => { if (e.key === "Enter") connectClick(); });
        };
    });

    return (
        <div className="flex flex-col md:justify-center md:items-center w-full my-6 px-8 md:px-0 md:my-14">
            <div className="flex flex-col md:justify-center md:items-center w-full md:w-1/2 md:my-8">
                <h1 className="font-title text-xl md:text-2xl self-start mb-4">Se connecter</h1>
                <hr className="md:w-[calc(100%-3.5rem)] text-white-200 lg:visible md:invisible sm:invisible md:mb-8 mb-" />
                <div className="md:w-1/2">
                    <Input color="primary" placeholder="email" type="email"
                        onChange={e => setLoginState({ ...loginState, username: e.target.value })} />
                    <Input color="primary" placeholder="mot-de-passe" type="password"
                        onChange={e => setLoginState({ ...loginState, pwd: e.target.value })} />
                </div>
                <div className="w-full md:w-5/6 flex justify-between items-center self-end mt-9">
                    <p className="w-36 md:w-full">Pas de compte ?
                        <span className="text-primary-200 underline cursor-pointer md:ml-2" onClick={() => router.push("/register")}>
                            Créez ici
                        </span>
                    </p>
                    <Button color="secondary" className="w-36 md:w-1/6" onClick={connectClick}>Connecter</Button>
                </div>
            </div>
        </div>
    );
};
