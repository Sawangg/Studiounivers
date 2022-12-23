import { LoginBlock } from "@modules/auth/LoginBlock";
import { Footer } from "@modules/Footer";
import { Navbar } from "@modules/Navbar";

export default async function Page() {
    return (
        <>
            <Navbar />
            <LoginBlock />
            <Footer />
        </>
    );
}
