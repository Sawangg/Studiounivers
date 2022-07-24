import React, { DetailedHTMLProps, HTMLAttributes, useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/ban-types
export type DropdownProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {};

export const Dropdown: React.FC<DropdownProps> = ({ children }) => {
    const toggledRef = useRef<HTMLDivElement>(null);
    const dropDownRef = useRef<HTMLDivElement>(null);
    const [toggled, setToggled] = useState(false);
    const spring = useSpring({
        opacity: toggled ? 1 : 0,
        onRest: () => {
            if (!toggled) dropDownRef.current!.style.display = "none";
        },
    });

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                toggled &&
                dropDownRef.current &&
                toggledRef.current &&
                !dropDownRef.current.contains(event.target as Node) &&
                !toggledRef.current.contains(event.target as Node)
            ) {
                setToggled(false);
            }
        };

        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropDownRef, toggled]);

    const open = () => {
        dropDownRef.current!.style.display = "flex";
        setToggled(!toggled);
    };

    return (
        <div className="block">
            <div ref={toggledRef} className="max-h-[20px]">
                <Image
                    src="/assets/icons/burger.svg"
                    width="20px"
                    height="20px"
                    alt="burger"
                    className="cursor-pointer"
                    onClick={open}
                />
            </div>
            <animated.div
                className="absolute top-16 left-0 w-full hidden flex-col gap-2 z-50 h-96 p-10 bg-white"
                ref={dropDownRef}
                style={spring}
            >
                {children}
            </animated.div>
        </div>
    );
};
