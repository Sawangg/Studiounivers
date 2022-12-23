// import type { NextPage } from "next";
// import Head from "next/head";
// import { withAuthSsrRedirection } from "@hoc/withAuth";
// import { apiEndpoint } from "@lib/constants";
// import { Footer } from "@modules/Footer";
// import { Navbar } from "@modules/Navbar";
// import { CartBlock } from "@modules/user/CartBlock";
// import { Cart } from "@type/Cart";
// import { GetServerSidePropsContextUser } from "@type/GetServerSidePropsContextUser";
// import { User } from "@type/User";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// export type CartProps = {
//     user: User | null;
//     cart: Cart | null;
// };

// const getCart = async (context: GetServerSidePropsContextUser) => {
//     try {
//         const res = await fetch(`${apiEndpoint}/api/user/cart`, {
//             headers: context.req ? { cookie: context.req.headers.cookie! } : undefined,
//         });
//         const data = await res.json();
//         return data as Cart;
//     } catch {
//         return null;
//     }
// };

// export const getServerSideProps = withAuthSsrRedirection(async (context: GetServerSidePropsContextUser) => {
//     const cart = await getCart(context);

//     if (!cart) {
//         return {
//             redirect: {
//                 permanent: false,
//                 destination: "/",
//             },
//         };
//     }

//     return {
//         props: {
//             user: context.user,
//             cart,
//             ...(await serverSideTranslations(context.locale!, ["common"])),
//         },
//     };
// });

// const Cart: NextPage<CartProps> = ({ user, cart }) => (
//     <>
//         <Head>
//             <title>StudioUnivers — Panier</title>
//         </Head>
//         <div className="w-full flex flex-col h-screen tracking-normal bg-white-100">
//             <Navbar user={user} />
//             <CartBlock cart={cart!} />
//             <Footer />
//         </div>
//     </>
// );

// export default Cart;
