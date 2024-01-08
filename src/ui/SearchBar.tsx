// "use client";

// import React, { DetailedHTMLProps, HTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { animated, useSpring } from "@react-spring/web";
// import { Product } from "@type/Product";
// import { apiEndpoint } from "@lib/constants";

// export const SearchBar: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = () => {
//   const router = useRouter();
//   const [open, setOpen] = useState(false);
//   const [results, setResults] = useState<Array<Product>>([]);

//   const barSpring = useSpring({ opacity: open ? 1 : 0, width: open ? "20rem" : "7rem" });
//   const dataSpring = useSpring({ opacity: open ? 1 : 0 });
//   const textInput = useRef<HTMLInputElement | null>(null);
//   const dataRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (dataRef.current) dataRef.current.style.display = "flex";
//   }, [results]);

//   const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
//     const query = event.target.value as string;
//     if (query.length) {
//       fetch(`${apiEndpoint}/product/search/${query}`)
//         .then((res) => res.json())
//         .then((data) => setResults(data));
//     } else {
//       setResults([]);
//     }
//   }, []);

//   return (
//     <div className="relative">
//       <div className="absolute left-3 top-3 z-50">
//         <Image
//           src="/assets/icons/search.svg"
//           width={20}
//           height={20}
//           alt="search"
//           className="cursor-pointer transition duration-200 ease-in-out"
//           onMouseOver={() => {
//             setOpen(true);
//             textInput.current!.value = "";
//             textInput.current!.focus();
//             if (dataRef.current) dataRef.current.style.display = "flex";
//           }}
//           onMouseLeave={() => {
//             if (textInput.current!.value.length === 0) {
//               setOpen(false);
//               textInput.current!.value = "";
//               if (dataRef.current) dataRef.current.style.display = "none";
//             }
//           }}
//           onClick={() => open ?? setOpen(!open)}
//         />
//       </div>
//       <animated.input
//         name="ipt-search"
//         ref={textInput}
//         style={barSpring}
//         onChange={onChange}
//         className="w-full rounded-lg border-[1px] border-primary-900 px-10 py-1 text-lg outline-none"
//       />
//       {results && results.length > 0 && (
//         <animated.div
//           ref={dataRef}
//           style={dataSpring}
//           className="absolute z-50 mt-2 flex w-full max-w-[20rem] flex-col items-start gap-2 rounded-lg bg-primary-700 px-10 py-4 text-lg text-white"
//           onClick={() => (dataRef.current!.style.display = "none")}
//         >
//           {results.map((product) => (
//             <button key={product.id} onClick={() => router.push(`/product/${product.id}`)}>
//               <h5 className="cursor-pointer text-base">{product.name}</h5>
//             </button>
//           ))}
//         </animated.div>
//       )}
//     </div>
//   );
// };
