import { redirect } from "next/navigation";
import { getCart } from "@api/user/getCart";
import { getUser } from "@api/user/getUser";
import { CartBlock } from "@modules/user/CartBlock";

export default async function Page() {
  const user = await getUser();
  if (!user) redirect("/login");
  const cart = await getCart();

  return (
    <>
      <CartBlock cart={cart!} />
    </>
  );
}
