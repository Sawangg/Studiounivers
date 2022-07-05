import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Button } from "./Button";

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

export const Input: React.FC<InputProps> = ({
    placeholder,
    label,
    color = "primary",
    button,
    ...props
}) => (
    <>
        {label && <label htmlFor="ipt" className="font-title text-lg">{label}</label>}
        <div className="flex flex-row items-center justify-center mt-4">
            <input
                name="ipt"
                className={`w-full pl-4 sm:pl-8 py-4 text-lg ${colorInputClassnames[color]} outline-none text-white placeholder:text-white-700`}
                placeholder={placeholder}
                {...props}
            />
            {button &&
                <Button color={color === "primary" ? "secondary" : "primary"}>{button}</Button>
            }
        </div>
    </>
);
