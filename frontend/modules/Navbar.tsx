import React, { DetailedHTMLProps, HTMLAttributes, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Dropdown } from "../ui/Dropdown";
import { SearchBar } from "../ui/SearchBar";
import { Product } from "../types/Product";
import { apiEndpoint } from "../lib/constants";
import axios from "axios";
import { User } from "../types/User";

export type NavbarProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    user?: User | null;
};

export const Navbar: React.FC<NavbarProps> = ({ user }) => {
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState(user);
    const [results, setResults] = useState<Array<Product>>([]);

    useEffect(() => {
        if (!user) axios.get(`${apiEndpoint}/api/auth`, { withCredentials: true }).then(rep => setCurrentUser(rep.data)).catch(() => setCurrentUser(null));
    }, [user]);

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value as string;
        if (query.length) {
            axios.get(`${apiEndpoint}/api/product/search/${query}`).then(rep => {
                setResults(rep.data);
            });
        } else {
            setResults([]);
        }
    }, []);

    return (
        <nav className="w-full bg-white flex flex-col justify-center items-center">
            <div className="w-full flex flex-row justify-between sm:grid sm:grid-cols-3 items-center py-3 px-5 sm:px-10">
                <div className="hidden sm:block">
                    <SearchBar onChange={onChange} searchData={results} />
                </div>
                <h2 className="sm:flex justify-center text-3xl cursor-pointer" title="StudioUnivers - Accueil" onClick={() => router.push("/")}>StudioUnivers</h2>
                <div className="hidden sm:flex flex-row justify-end">
                    <div className="mr-5">
                        <Image src="/assets/icons/cart.svg" width="20px" height="20px" alt="cart" className="cursor-pointer" title="Votre panier"
                            onClick={() => currentUser ? router.push("/cart") : router.push("/login")} />
                    </div>
                    <div className="mr-5">
                        <Image src="/assets/icons/user.svg" width="20px" height="20px" alt="user" className="cursor-pointer" title="Mon profil"
                            onClick={() => currentUser ? router.push("/profile") : router.push("/login")} />
                    </div>
                </div>
                <div className="block md:hidden max-h-[20px]">
                    <Dropdown>
                        <div className="flex flex-row justify-around">
                            <div className="flex flex-row gap-2 items-center cursor-pointer"
                                onClick={() => currentUser ? router.push("/cart") : router.push("/login")}
                            >
                                <Image src="/assets/icons/cart.svg" width="20px" height="20px" alt="cart" />
                                <p>Panier</p>
                            </div>
                            <div className="flex flex-row gap-2 items-center cursor-pointer"
                                onClick={() => currentUser ? router.push("/profile") : router.push("/login")}
                            >
                                <Image src="/assets/icons/user.svg" width="20px" height="20px" alt="user" />
                                <p>Profile</p>
                            </div>
                        </div>
                        <hr className="w-full text-white-200 mb-4" />
                        <p className="cursor-pointer" onClick={() => router.push("/products")}>Eclairages</p>
                        <p className="cursor-pointer" onClick={() => router.push("/products")}>Accessoires</p>
                        <p className="cursor-pointer" onClick={() => router.push("/products")}>Modificateurs</p>
                        <p className="cursor-pointer" onClick={() => router.push("/products")}>Arrière-fond</p>
                        <p className="cursor-pointer" onClick={() => router.push("/products")}>Lampes</p>
                        <p className="cursor-pointer" onClick={() => router.push("/products")}>Appareils Photo</p>
                        <p className="cursor-pointer" onClick={() => router.push("/products")}>Strobist</p>
                    </Dropdown>
                </div>
            </div>
            <hr className="w-[calc(100%-3.5rem)] text-white-200 hidden sm:block" />
            <div className="w-full hidden sm:flex justify-center py-3">
                <div className="w-4/6 flex flex-row text-lg items-center justify-around text-white-400">
                    <p className="cursor-pointer" onClick={() => router.push("/products")}>Eclairages</p>
                    <p className="cursor-pointer" onClick={() => router.push("/products")}>Accessoires</p>
                    <p className="cursor-pointer" onClick={() => router.push("/products")}>Modificateurs</p>
                    <p className="cursor-pointer" onClick={() => router.push("/products")}>Arrière-fond</p>
                    <p className="cursor-pointer" onClick={() => router.push("/products")}>Lampes</p>
                    <p className="cursor-pointer" onClick={() => router.push("/products")}>Appareils Photo</p>
                    <p className="cursor-pointer" onClick={() => router.push("/products")}>Strobist</p>
                </div>
            </div>
        </nav>
    );
};
