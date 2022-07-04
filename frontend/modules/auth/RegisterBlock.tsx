import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiEndpoint } from "../../lib/constants";
import { useRouter } from "next/router";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";

export const RegisterBlock: React.FC = () => {
    const router = useRouter();
    const [registerState, setRegisterState] = useState({ username: "", pwd: "", cpwd: "" });

    const registerClick = () => {
        if (registerState.pwd === registerState.cpwd) {
            axios.post(`${apiEndpoint}/api/user/register`, { username: registerState.username, password: registerState.pwd }, { withCredentials: true }).then(rep => {
                if (rep.status === 201) {
                    router.push("/login");
                } else {
                    setRegisterState({ username: registerState.username, pwd: "", cpwd: "" });
                }
            }).catch(() => {
                setRegisterState({ username: registerState.username, pwd: "", cpwd: "" });
            });
        } else {
            setRegisterState({ username: registerState.username, pwd: "", cpwd: "" });
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", e => { if (e.key === "Enter") registerClick(); });
        return () => {
            window.removeEventListener("keydown", e => { if (e.key === "Enter") registerClick(); });
        };
    });

    return (
        <div className="flex flex-col md:justify-center md:items-center w-full my-6 px-8 md:px-0 md:my-14">
            <div className="flex flex-col md:justify-center md:items-center w-full md:w-1/2 md:my-8">
                <h1 className="font-title text-xl md:text-2xl self-start mb-4">Créér un compte</h1>
                <hr className="md:w-[calc(100%-3.5rem)] text-white-200 lg:visible md:invisible sm:invisible md:mb-8 mb-" />
                <div className="md:w-1/2">
                    <Input color="primary" placeholder="email" type="email"
                        onChange={e => setRegisterState({ ...registerState, username: e.target.value })} />
                    <Input color="primary" placeholder="password" type="password"
                        onChange={e => setRegisterState({ ...registerState, pwd: e.target.value })} />
                    <Input color="primary" placeholder="confirm password" type="password"
                        onChange={e => setRegisterState({ ...registerState, cpwd: e.target.value })} />
                </div>
                <div className="w-full md:w-5/6 flex justify-between items-center self-end mt-9">
                    <p className="w-full">Déjà un compte ?
                        <span className="text-primary-200 underline cursor-pointer md:ml-2" onClick={() => router.push("/login")}>
                            Connectez vous
                        </span>
                    </p>
                    <Button color="secondary" className="w-36 md:w-1/6" onClick={registerClick}>Créer</Button>
                </div>
            </div>
        </div>
    );
};
