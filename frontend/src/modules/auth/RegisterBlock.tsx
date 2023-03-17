import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { apiEndpoint } from "@lib/constants";
import { Button } from "@ui/Button";
import { Input } from "@ui/Input";

export const RegisterBlock: React.FC = () => {
    const router = useRouter();
    const [registerState, setRegisterState] = useState({ username: "", pwd: "", cpwd: "" });

    const registerClick = () => {
        if (registerState.pwd === registerState.cpwd) {
            fetch(`${apiEndpoint}/api/user/register`, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: registerState.username, password: registerState.pwd }),
            })
                .then((res) => {
                    if (res.status === 201) {
                        router.push("/login");
                    } else {
                        setRegisterState({ username: registerState.username, pwd: "", cpwd: "" });
                    }
                })
                .catch(() => {
                    setRegisterState({ username: registerState.username, pwd: "", cpwd: "" });
                });
        } else {
            setRegisterState({ username: registerState.username, pwd: "", cpwd: "" });
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            if (e.key === "Enter") registerClick();
        });
        return () => {
            window.removeEventListener("keydown", (e) => {
                if (e.key === "Enter") registerClick();
            });
        };
    });

    return (
        <section className="flex w-full flex-col bg-white-100 py-6 px-8 md:items-center md:justify-center md:px-0 md:py-10">
            <div className="flex w-full flex-col md:my-8 md:w-1/2 md:items-center md:justify-center">
                <h1 className="mb-4 self-start font-title text-xl md:text-2xl">Créér un compte</h1>
                <hr className="mb- text-white-200 sm:invisible md:invisible md:mb-8 md:w-[calc(100%-3.5rem)] lg:visible" />
                <div className="md:w-1/2">
                    <Input
                        color="primary"
                        placeholder="email"
                        type="email"
                        onChange={(e) => setRegisterState({ ...registerState, username: e.target.value })}
                    />
                    <Input
                        color="primary"
                        placeholder="mot-de-passe"
                        type="password"
                        onChange={(e) => setRegisterState({ ...registerState, pwd: e.target.value })}
                    />
                    <Input
                        color="primary"
                        placeholder="confirmation mot-de-passe"
                        type="password"
                        onChange={(e) => setRegisterState({ ...registerState, cpwd: e.target.value })}
                    />
                </div>
                <div className="mt-9 flex w-full items-center justify-between self-end md:w-5/6">
                    <p className="w-full">
                        Déjà un compte ?
                        <span
                            className="cursor-pointer text-primary-200 underline md:ml-2"
                            onClick={() => router.push("/login")}
                            onKeyPress={() => router.push("/login")}
                            role="button"
                            tabIndex={0}
                        >
                            Connectez vous
                        </span>
                    </p>
                    <Button color="secondary" className="w-36 md:w-1/6" onClick={registerClick}>
                        Créer
                    </Button>
                </div>
            </div>
        </section>
    );
};
