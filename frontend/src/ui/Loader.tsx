import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const colorClassnames = {
  primary: "#045685",
  secondary: "#F9F9F9",
};

const sizeClassnames = {
  large: "w-14 h-14",
  small: "w-10 h-10",
};

export type LoaderProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  color?: keyof typeof colorClassnames;
  size?: keyof typeof sizeClassnames;
};

export const Loader: React.FC<LoaderProps> = ({ color = "primary", size = "small" }) => {
  return (
    <svg
      width="37"
      height="39"
      viewBox="0 0 37 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animate-spin ${sizeClassnames[size]}`}
    >
      <path
        d="M32.2271 8.64544C29.5594 5.39476 25.847 3.16965 21.7226 2.34925C17.5982 1.52886 13.3169 2.16392 9.60822 4.14625"
        stroke={colorClassnames[color]}
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};
