// import { useState } from "react";
// import { animated, useSpring } from "@react-spring/web";

// interface ToggleProps {
//   isOpen?: boolean;
//   onClick(open: boolean): void;
// }

// export function Toggle({ isOpen, onClick }: ToggleProps) {
//   const [toggle, set] = useState(isOpen ? Number(isOpen) : 0);
//   const [{ x }] = useSpring({ x: toggle, config: { bounce: 0.25 } }, [toggle]);

//   const handleClick = () => {
//     set((toggle) => Number(!toggle));
//     onClick(!Boolean(toggle).valueOf());
//   };

//   return (
//     <>
//       <animated.span
//         style={{
//           backgroundColor: x.to([0, 1], ["#000000", "#6beba4"]),
//         }}
//         onClick={handleClick}
//         className="flex w-12 cursor-pointer rounded-full border border-white"
//       >
//         <animated.span
//           style={{
//             marginLeft: x.to([0, 1], [0, 21]),
//           }}
//           className="h-6 w-6 rounded-full bg-white shadow-2xl"
//         ></animated.span>
//       </animated.span>
//     </>
//   );
// }
