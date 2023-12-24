import Link from "next/link";
import { getCart } from "@api/user/getCart";
import { getUser } from "@api/user/getUser";
import { SearchBar } from "@ui/SearchBar";
import { NavbarAccount } from "./NavbarAccount";

export async function Navbar() {
  const [user, cart] = await Promise.all([getUser(), getCart()]);

  return (
    <nav className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-row items-center justify-between px-5 py-3 sm:grid sm:grid-cols-3 sm:px-10">
        <div className="hidden sm:block">
          <SearchBar />
        </div>
        <div className="justify-center sm:flex">
          <Link href="/" className="text-3xl" title="StudioUnivers - Accueil">
            StudioUnivers
          </Link>
        </div>
        <NavbarAccount user={user} cart={cart} />
      </div>
      <hr className="hidden w-[calc(100%-3.5rem)] text-white-200 sm:block" />
      <div className="hidden w-full justify-center py-3 sm:flex">
        <div className="flex w-4/6 flex-row items-center justify-around text-lg text-white-400">
          <Link href="/products">Eclairages</Link>
          <Link href="/products">Accessoires</Link>
          <Link href="/products">Modificateurs</Link>
          <Link href="/products">Arrière-fond</Link>
          <Link href="/products">Lampes</Link>
          <Link href="/products">Appareils Photo</Link>
          <Link href="/products">Strobist</Link>
        </div>
      </div>
    </nav>
  );
}
