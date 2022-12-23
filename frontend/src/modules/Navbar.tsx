"use client";

import React, { DetailedHTMLProps, HTMLAttributes, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiEndpoint } from "@lib/constants";
import { Product } from "@type/Product";
import { User } from "@type/User";
import { Dropdown } from "@ui/Dropdown";
import { SearchBar } from "@ui/SearchBar";

export type NavbarProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    user?: User | null;
};

export const Navbar: React.FC<NavbarProps> = ({ user }) => {
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState(user);
    const [results, setResults] = useState<Array<Product>>([]);

    const t = (str: string) => {
        return <p>{str}</p>;
    };

    useEffect(() => {
        if (!user)
            fetch(`${apiEndpoint}/api/auth`, { credentials: "include" })
                .then((res) => res.json())
                .then((data) => setCurrentUser(data))
                .catch(() => setCurrentUser(null));
    }, [user]);

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value as string;
        if (query.length) {
            fetch(`${apiEndpoint}/api/product/search/${query}`)
                .then((res) => res.json())
                .then((data) => setResults(data));
        } else {
            setResults([]);
        }
    }, []);

    return (
        <nav className="flex w-full flex-col items-center justify-center bg-white">
            <div className="flex w-full flex-row items-center justify-between py-3 px-5 sm:grid sm:grid-cols-3 sm:px-10">
                <div className="hidden sm:block">
                    <SearchBar onChange={onChange} searchData={results} />
                </div>
                <div className="justify-center sm:flex">
                    <Link href="/" className="text-3xl" title="StudioUnivers - Accueil">
                        StudioUnivers
                    </Link>
                </div>
                <div className="hidden flex-row justify-end sm:flex">
                    <div className="mr-5">
                        <Image
                            src="/assets/icons/cart.svg"
                            width={20}
                            height={20}
                            alt="cart"
                            className="cursor-pointer"
                            title="Votre panier"
                            onClick={() => (currentUser ? router.push("/cart") : router.push("/login"))}
                        />
                    </div>
                    <div className="mr-5">
                        <Image
                            src="/assets/icons/user.svg"
                            width={20}
                            height={20}
                            alt="user"
                            className="cursor-pointer"
                            title="Mon profil"
                            onClick={() => (currentUser ? router.push("/profile") : router.push("/login"))}
                        />
                    </div>
                </div>
                <div className="block max-h-[20px] md:hidden">
                    <Dropdown>
                        <div className="flex flex-row justify-around">
                            <Link href={currentUser ? "/cart" : "/login"} className="flex flex-row items-center gap-2">
                                <Image src="/assets/icons/cart.svg" width={20} height={20} alt="cart" />
                                <p>Panier</p>
                            </Link>
                            <Link
                                href={currentUser ? "/profile" : "/login"}
                                className="flex flex-row items-center gap-2"
                            >
                                <Image src="/assets/icons/user.svg" width={20} height={20} alt="user" />
                                <p>Profile</p>
                            </Link>
                        </div>
                        <hr className="mb-4 w-full text-white-200" />
                        <Link href="/products">{t("navbar.catego1")}</Link>
                        <Link href="/products">{t("navbar.catego2")}</Link>
                        <Link href="/products">{t("navbar.catego3")}</Link>
                        <Link href="/products">{t("navbar.catego4")}</Link>
                        <Link href="/products">{t("navbar.catego5")}</Link>
                        <Link href="/products">{t("navbar.catego6")}</Link>
                        <Link href="/products">{t("navbar.catego7")}</Link>
                    </Dropdown>
                </div>
            </div>
            <hr className="hidden w-[calc(100%-3.5rem)] text-white-200 sm:block" />
            <div className="hidden w-full justify-center py-3 sm:flex">
                <div className="flex w-4/6 flex-row items-center justify-around text-lg text-white-400">
                    <Link href="/products">{t("navbar.catego1")}</Link>
                    <Link href="/products">{t("navbar.catego2")}</Link>
                    <Link href="/products">{t("navbar.catego3")}</Link>
                    <Link href="/products">{t("navbar.catego4")}</Link>
                    <Link href="/products">{t("navbar.catego5")}</Link>
                    <Link href="/products">{t("navbar.catego6")}</Link>
                    <Link href="/products">{t("navbar.catego7")}</Link>
                </div>
            </div>
        </nav>
    );
};
