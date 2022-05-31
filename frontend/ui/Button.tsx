import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

const sizeClassnames = {
    big: "py-2 px-6 text-sm rounded-lg",
    small: "px-2 py-1 text-sm rounded-md",
    tiny: "px-1 text-sm rounded-5",
};

const colorClassnames = {
    primary:
        "shadow-md text-button uppercase text-primary-50 bg-gradient-to-l from-primary-600 to-primary-400 transition ease-in-out delay-100 duration-100\
        hover:text-primary-100",
    "primary-outline":
        "shadow-md text-button uppercase text-primary-500 border-2 border-primary-500 hover:bg-primary-500 hover:bg-opacity-5\
        focus:outline-none focus:ring-0 transition duration-200 ease-in-out",
    secondary:
        "text-button bg-primary-500 hover:bg-primary-400 disabled:text-primary-300",
    };

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    size?: keyof typeof sizeClassnames;
    color?: keyof typeof colorClassnames;
    loading?: boolean;
    icon?: ReactNode;
    transition?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    size = "big",
    color = "primary",
    disabled,
    loading,
    className = "",
    transition,
    ...props
}) => (
    <button
        disabled={disabled || loading}
        className={`flex outline-none focus:ring-4 focus:ring-${color} ${sizeClassnames[size]
            } ${transition ? `transition duration-200 ease-in-out` : ``} ${colorClassnames[color]
            } font-bold flex items-center justify-center ${className}`}
        {...props}
    >
        <span className={`flex items-center`}>
            {children}
        </span>
    </button>
);
