import Image from "next/image";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const sizeClassnames = {
    medium: "py-4 px-8",
    small: "px-3 py-6",
};

const colorClassnames = {
    primary: "bg-primary-600 text-white hover:bg-primary-500 transition duration-200 ease-in-out",
    secondary: "bg-white-300 text-primary-700 hover:bg-accent-200/50 transition duration-200 ease-in-out",
    opaque: "",
};

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    size?: keyof typeof sizeClassnames;
    color?: keyof typeof colorClassnames;
    arrow?: boolean;
    loading?: boolean;
    loadingStyle?: string;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    size = "medium",
    color = "primary",
    disabled,
    loading,
    loadingStyle,
    className = "",
    arrow,
    ...props
}) => (
    <button
        disabled={disabled}
        className={`cursor-pointer flex outline-none focus:ring-4 ${sizeClassnames[size]} ${colorClassnames[color]} 
            flex items-center justify-center text-lg group gap-x-2 min-w-max
            ${className}`}
        {...props}
    >
        {loading ?
            <div className={`flex justify-center items-center ${loadingStyle}`}>
                <svg role="status" className={`w-8 h-8 animate-spin ${color === "primary" ? "fill-primary-600" : "fill-white-300"}`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M 93.9676 39.0409 C 96.393 38.4038 97.8624 35.9116 97.29 33.307 C 96.617 28.3 94.93 24.523 92.117 19.782 C 88.099 13.754 84.081 10.218 77.893 6.522 C 70.74 2.262 65.115 0.494 59.409 0.012 C 51.533 -0.711 46.631 -1.033 41.648 0.575 C 39.2613 1.6933 37.813 4.1978 38.4501 6.6233 C 39.0873 9.0487 41.5694 10.4717 44.14 10.459 C 48.238 10.701 51.935 10.62 54.909 11.263 C 61.177 12.388 63.829 13.353 69.615 16.005 C 74.437 19.058 77.652 21.55 81.268 26.291 C 83.518 29.586 85.286 32.399 87.801 35.874 C 89.083 38.2158 91.5421 39.6781 93.9676 39.0409 Z" fill="currentFill" />
                </svg>
            </div>
            :
            <span className="flex items-center relative group-hover:before:scale-x-100 group-hover:before:scale-y-100
                before:transition-scale before:absolute before:bottom-[1px] before:left-0 before:origin-left before:border-t
                before:scale-x-0 before:duration-700 before:ease-out-expo"
            >
                {children}
            </span>
        }
        {arrow && <Image src="/assets/icons/caret.svg" alt="caret" width="20px" height="20px" />}
    </button>
);
