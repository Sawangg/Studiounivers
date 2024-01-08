import { redirect } from "next/navigation";
import { CartBlock } from "@components/user/CartBlock";

export default async function Page() {
  const user = await getUser();
  if (!user) redirect("/login");
  const cart = await getCart();

  return (
    <>
      <CartBlock />
    </>
  );
}
