"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiEndpoint } from "@lib/constants";
import { Button } from "@ui/Button";
import { TextInput } from "@ui/TextInput";

export const LoginBlock: React.FC = () => {
  const router = useRouter();
  const [loginState, setLoginState] = useState({ username: "", pwd: "" });

  const connectClick = () => {
    fetch(`${apiEndpoint}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: loginState.username, password: loginState.pwd }),
    })
      .then((res) => {
        if (res.status === 201) {
          setLoginState({ username: "", pwd: "" });
          window.location.href = "/"; // Router is not suited here
        } else {
          setLoginState({ username: loginState.username, pwd: "" });
        }
      })
      .catch(() => {
        setLoginState({ username: loginState.username, pwd: "" });
      });
  };

  useEffect(() => {
    window.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Enter") connectClick();
      },
      { once: true },
    );
    return () => {
      window.removeEventListener("keydown", (e) => {
        if (e.key === "Enter") connectClick();
      });
    };
  });

  return (
    <section className="flex w-full flex-col bg-white-100 px-8 py-6 md:items-center md:justify-center md:px-0 md:py-10">
      <div className="flex w-full flex-col md:my-8 md:w-1/2 md:items-center md:justify-center">
        <h1 className="mb-4 self-start font-title text-xl md:text-2xl">Se connecter</h1>
        <hr className="mb- text-white-200 sm:invisible md:invisible md:mb-8 md:w-[calc(100%-3.5rem)] lg:visible" />
        <div className="md:w-1/2">
          <TextInput
            color="primary"
            placeholder="email"
            type="email"
            onChange={(e) => setLoginState({ ...loginState, username: e.target.value })}
          />
          <TextInput
            color="primary"
            placeholder="mot-de-passe"
            type="password"
            onChange={(e) => setLoginState({ ...loginState, pwd: e.target.value })}
          />
        </div>
        <div className="mt-9 flex w-full items-center justify-between self-end md:w-5/6">
          <p className="w-36 md:w-full">
            Pas de compte ?
            <span
              className="cursor-pointer text-primary-200 underline md:ml-2"
              onClick={() => router.push("/register")}
              onKeyDown={() => router.push("/register")}
              role="button"
              tabIndex={0}
            >
              Créez ici
            </span>
          </p>
          <Button color="secondary" className="w-36 md:w-1/6" onClick={connectClick}>
            Connecter
          </Button>
        </div>
      </div>
    </section>
  );
};
