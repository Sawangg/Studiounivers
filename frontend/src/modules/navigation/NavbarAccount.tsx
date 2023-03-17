"use client";

import { User } from "@type/User";
import { Dropdown } from "@ui/Dropdown";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export type NavbarAccountProps = {
    user: User | null;
};

export const NavbarAccount: React.FC<NavbarAccountProps> = ({ user }) => {
    const router = useRouter();

    return (
        <>
            <div className="hidden flex-row justify-end sm:flex">
                <div className="mr-5">
                    <Image
                        src="/assets/icons/cart.svg"
                        width={20}
                        height={20}
                        alt="cart"
                        className="cursor-pointer"
                        title="Votre panier"
                        onClick={() => (user ? router.push("/cart") : router.push("/login"))}
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
                        onClick={() => (user ? router.push("/profile") : router.push("/login"))}
                    />
                </div>
            </div>
            <div className="block max-h-[20px] md:hidden">
                <Dropdown>
                    <div className="flex flex-row justify-around">
                        <Link href={user ? "/cart" : "/login"} className="flex flex-row items-center gap-2">
                            <Image src="/assets/icons/cart.svg" width={20} height={20} alt="cart" />
                            <p>Panier</p>
                        </Link>
                        <Link href={user ? "/profile" : "/login"} className="flex flex-row items-center gap-2">
                            <Image src="/assets/icons/user.svg" width={20} height={20} alt="user" />
                            <p>Profile</p>
                        </Link>
                    </div>
                    <hr className="mb-4 w-full text-white-200" />
                    <Link href="/products">Eclairages</Link>
                    <Link href="/products">Accessoires</Link>
                    <Link href="/products">Modificateurs</Link>
                    <Link href="/products">Arrière-fond</Link>
                    <Link href="/products">Lampes</Link>
                    <Link href="/products">Appareils Photo</Link>
                    <Link href="/products">Strobist</Link>
                </Dropdown>
            </div>
        </>
    );
};
