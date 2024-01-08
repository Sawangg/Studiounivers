"use client";

import { Checkbox as RACheckbox, type CheckboxProps } from "react-aria-components";

export const Checkbox: React.FC<CheckboxProps> = ({ children, ...props }) => (
  <RACheckbox {...props}>{children}</RACheckbox>
);
