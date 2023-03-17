import { getUser } from "@api/user/getUser";
import { ProfileBlock } from "@modules/user/ProfileBlock";
import { redirect } from "next/navigation";

export default async function Page() {
    const user = await getUser();
    if (!user) redirect("/login");

    return (
        <>
            <ProfileBlock user={user} />
        </>
    );
}
