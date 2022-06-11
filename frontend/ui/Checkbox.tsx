import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type CheckboxProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label?: string;
    disabled?: boolean;
};

export const Checkbox: React.FC<CheckboxProps> = ({
    label,
    ...props
}) => (
    <div className="flex items-center gap-4">
        <input name="chckb" type="checkbox"
            className="opacity-0 appearance-none absolute w-4 h-4 cursor-pointer"
            {...props}
        />
        <div className="border-2 rounded-sm border-white-700 w-[15px] h-[15px] flex flex-shrink-0 justify-center items-center">
            <svg className="hidden w-3 h-3 pointer-events-none" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 8.99997L0 4.49997L0.707 3.79297L4.5 7.58547L11.293 0.792969L12 1.49997L4.5 8.99997Z" fill="#FFFFFF" />
            </svg>
        </div>
        {label && <label htmlFor="chckb" className="text-base select-none">{label}</label>}
    </div>
);
