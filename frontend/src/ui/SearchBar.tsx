import React, { DetailedHTMLProps, HTMLAttributes, useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import { Product } from "@type/Product";
import { useRouter } from "next/router";

export type SearchBarProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchData: Array<Product>;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onChange, searchData }) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const barSpring = useSpring({ opacity: open ? 1 : 0, width: open ? "20rem" : "7rem" });
    const dataSpring = useSpring({ opacity: open ? 1 : 0 });
    const textInput = useRef<HTMLInputElement>(null);
    const dataRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (dataRef.current) dataRef.current.style.display = "flex";
    }, [searchData]);

    return (
        <div className="relative">
            <div className="absolute top-3 left-3 z-50">
                <Image
                    src="/assets/icons/search.svg"
                    width={20}
                    height={20}
                    alt="search"
                    className="ease-in-out cursor-pointer transition duration-200"
                    onMouseOver={() => {
                        setOpen(true);
                        textInput.current!.value = "";
                        textInput.current!.focus();
                        if (dataRef.current) dataRef.current.style.display = "flex";
                    }}
                    onMouseLeave={() => {
                        if (textInput.current!.value.length === 0) {
                            setOpen(false);
                            textInput.current!.value = "";
                            if (dataRef.current) dataRef.current.style.display = "none";
                        }
                    }}
                    onClick={() => open ?? setOpen(!open)}
                />
            </div>
            <animated.input
                name="ipt-search"
                ref={textInput}
                style={barSpring}
                onChange={onChange}
                className="w-full rounded-lg border-[1px] border-primary-900 px-10 py-1 text-lg outline-none"
            />
            {searchData && searchData.length > 0 && (
                <animated.div
                    ref={dataRef}
                    style={dataSpring}
                    className="absolute z-50 mt-2 flex w-full max-w-[20rem] flex-col items-start gap-2 rounded-lg bg-primary-700 px-10 py-4 text-lg text-white"
                    // eslint-disable-next-line no-return-assign
                    onClick={() => (dataRef.current!.style.display = "none")}
                >
                    {searchData.map((product) => (
                        <button key={product.id} onClick={() => router.push(`/product/${product.id}`)}>
                            <h5 className="cursor-pointer text-base">{product.name}</h5>
                        </button>
                    ))}
                </animated.div>
            )}
        </div>
    );
};
