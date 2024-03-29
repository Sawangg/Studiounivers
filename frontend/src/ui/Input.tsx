"use client";

import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Button } from "@ui/Button";

const colorInputClassnames = {
    primary: "bg-primary-600 text-white placeholder:text-white",
    secondary: "bg-white-300 text-white",
};

export type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    button?: string;
    color?: keyof typeof colorInputClassnames;
};

export const Input: React.FC<InputProps> = ({ placeholder, label, color = "primary", button, ...props }) => (
    <>
        {label && <label className="font-title text-lg">{label}</label>}
        <div className="mt-4 flex flex-row items-center justify-center">
            <input
                className={`w-full py-4 pl-4 text-lg sm:pl-8 ${colorInputClassnames[color]} text-white outline-none placeholder:text-white-700`}
                placeholder={placeholder}
                {...props}
            />
            {button && <Button color={color === "primary" ? "secondary" : "primary"}>{button}</Button>}
        </div>
    </>
);
