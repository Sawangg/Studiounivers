import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const sizeClassnames = {
    medium: "py-4 px-8",
    small: "px-3 py-6",
};

const colorClassnames = {
    primary: "bg-primary-600 text-white hover:bg-primary-500 transition duration-200 ease-in-out",
    secondary: "bg-white-300 text-primary-700 hover:bg-white-400 transition duration-200 ease-in-out",
    opaque: "",
};

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    size?: keyof typeof sizeClassnames;
    color?: keyof typeof colorClassnames;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    size = "medium",
    color = "primary",
    disabled,
    className = "",
    ...props
}) => (
    <button
        disabled={disabled}
        className={`flex outline-none focus:ring-4 ${sizeClassnames[size]} ${colorClassnames[color]} 
            flex items-center justify-center text-lg ${className}`}
        {...props}
    >
        <span className="flex items-center">
            {children}
        </span>
    </button>
);
