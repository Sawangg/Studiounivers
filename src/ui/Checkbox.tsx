import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import type React from "react";

export type CheckboxProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label?: string;
  disabled?: boolean;
};

export const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => (
  <div className="flex items-center gap-4">
    <input
      name="chckb"
      type="checkbox"
      className="absolute h-4 w-4 cursor-pointer appearance-none opacity-0"
      {...props}
    />
    <div className="border-white-700 flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-sm border-2">
      <svg
        className="pointer-events-none hidden h-3 w-3"
        width="12"
        height="9"
        viewBox="0 0 12 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 8.99997L0 4.49997L0.707 3.79297L4.5 7.58547L11.293 0.792969L12 1.49997L4.5 8.99997Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
    {label && (
      <label htmlFor="chckb" className="select-none text-base">
        {label}
      </label>
    )}
  </div>
);
