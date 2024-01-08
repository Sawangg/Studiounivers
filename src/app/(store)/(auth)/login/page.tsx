import type { Metadata } from "next";
import { Button } from "@ui/Button";
import { TextInput } from "@ui/TextInput";

export const metadata: Metadata = {
  title: "StudioUnivers — Login",
};

export default async function Page() {
  return (
    <>
      <section className="flex w-full flex-col bg-white-100 px-8 py-6 md:items-center md:justify-center md:px-0 md:py-10">
        <div className="flex w-full flex-col md:my-8 md:w-1/2 md:items-center md:justify-center">
          <h1 className="mb-4 self-start font-title text-xl md:text-2xl">Se connecter</h1>
          <hr className="text-white-200 sm:invisible md:invisible md:mb-8 md:w-[calc(100%-3.5rem)] lg:visible" />
          <form>
            <div className="md:w-1/2">
              <TextInput color="primary" placeholder="email" type="email" />
              <TextInput color="primary" placeholder="mot de passe" type="password" />
            </div>
            <div className="mt-9 flex w-full items-center justify-between self-end md:w-5/6">
              <p className="w-36 md:w-full">
                Pas de compte ?
                <span
                  className="cursor-pointer text-primary-200 underline md:ml-2"
                  // onClick={() => router.push("/register")}
                  // onKeyDown={() => router.push("/register")}
                  role="button"
                  tabIndex={0}
                >
                  Créez ici
                </span>
              </p>
              <Button color="secondary" className="w-36 md:w-1/6">
                Connecter
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
