"use client";

import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Button } from "@ui/Button";

const colorClassnames = {
  primary: "bg-primary-600 text-white placeholder:text-white",
  secondary: "bg-white-300 text-white",
};

export type TextInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  button?: string;
  color?: keyof typeof colorClassnames;
};

export const TextInput: React.FC<TextInputProps> = ({ placeholder, label, color = "primary", button, ...props }) => (
  <>
    {label && <label className="font-title text-lg">{label}</label>}
    <div className="mt-4 flex flex-row items-center justify-center">
      <input
        className={`w-full py-4 pl-4 text-lg sm:pl-8 ${colorClassnames[color]} placeholder:text-white-700 text-white outline-none`}
        placeholder={placeholder}
        {...props}
      />
      {button && <Button color={color === "primary" ? "secondary" : "primary"}>{button}</Button>}
    </div>
  </>
);
