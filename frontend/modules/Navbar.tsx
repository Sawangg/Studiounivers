import React, { DetailedHTMLProps, HTMLAttributes, useCallback, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { SearchBar } from "../ui/SearchBar";
import { apiEndpoint } from "../lib/constants";
import axios from "axios";

export const Navbar: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
    const router = useRouter();
    const [results, setResults] = useState([]);

    // const onChange = useCallback(event => {
    //     console.log('yo');
    //     const query = event.target.value as string;
    //     if (query.length) {
    //         console.log(query);
    //         // axios.get(`${apiEndpoint}/api/product/search/${query}`).then(rep => {
    //         //     setResults(rep.data);
    //         // });
    //     } else {
    //         setResults([]);
    //     }
    // }, []);

    const onChange = () => {
        console.log("yo");
    };

    return (
        <nav className="w-full bg-white flex flex-col justify-center items-center">
            <div className="w-full grid grid-cols-3 items-center py-3 px-10">
                <SearchBar onChange={onChange} />
                <h2 className="flex justify-center text-3xl cursor-pointer" title="StudioUnivers - Accueil" onClick={() => router.push("/")}>StudioUnivers</h2>
                <div className="flex flex-row justify-end">
                    <div className="mr-5">
                        <Image src="/assets/icons/cart.svg" width="20px" height="20px" alt="cart" className="cursor-pointer" title="Votre panier"
                            onClick={() => router.push("/cart")} />
                    </div>
                    <div className="mr-5">
                        <Image src="/assets/icons/user.svg" width="20px" height="20px" alt="user" className="cursor-pointer" title="Mon profil"
                            onClick={() => router.push("/login")} />
                    </div>
                </div>
            </div>
            <hr className="w-[calc(100%-3.5rem)] text-white-200 lg:visible md:invisible sm:invisible" />
            <div className="w-full flex justify-center py-3 lg:visible md:invisible sm:invisible">
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
