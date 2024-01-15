"use client";

import clsx from "clsx";
import {
  Checkbox as RACheckbox,
  CheckboxGroup as RACheckboxGroup,
  type CheckboxGroupProps,
  type CheckboxProps as RACheckboxProps,
} from "react-aria-components";

const colorClasses = {
  dark: "[--checkbox-check:theme(colors.white)] [--checkbox-selected-bg:theme(colors.zinc.900)] [--checkbox-selected-border:theme(colors.zinc.950/90%)]",
  zinc: "",
  white: "",
  red: "",
  orange: "",
  amber: "",
  yellow: "",
  lime: "",
  green: "",
  emerald: "",
  teal: "",
  cyan: "",
  sky: "",
  blue: "",
  indigo: "",
  violet: "",
  purple: "",
  fuchsia: "",
  pink: "",
  rose: "",
};

export type CheckboxProps = RACheckboxProps & {
  color?: keyof typeof colorClasses;
};

export const Checkbox: React.FC<CheckboxProps> = ({ color = "dark", className, ...props }) => (
  <RACheckbox
    className={clsx(
      "group relative isolate flex size-5 cursor-pointer items-center justify-center rounded-[0.3125rem] border border-zinc-950/15 before:absolute before:inset-0 before:-z-10 before:rounded-[calc(0.3125rem-1px)] before:bg-white before:shadow after:absolute after:inset-0 after:rounded-[calc(0.3125rem-1px)] after:shadow-[inset_0_1px_theme(colors.white/15%)] focus:outline-none data-[disabled]:border-zinc-950/25 data-[hovered]:border-zinc-950/30 data-[selected]:border-transparent data-[selected]:data-[hovered]:border-transparent data-[disabled]:bg-zinc-950/5 data-[selected]:bg-[--checkbox-selected-border] data-[disabled]:opacity-50 data-[focused]:outline data-[focused]:outline-2 data-[focused]:outline-offset-2 data-[focused]:outline-blue-500 data-[disabled]:[--checkbox-check:theme(colors.zinc.950/50%)] before:data-[selected]:bg-[--checkbox-selected-bg] data-[disabled]:before:bg-transparent dark:border-white/15 dark:bg-white/5 dark:[--checkbox-selected-bg:theme(colors.zinc.600)] dark:before:hidden dark:after:-inset-px dark:after:hidden dark:after:rounded-[0.3125rem] dark:data-[disabled]:border-white/20 dark:data-[hovered]:border-white/30 dark:data-[selected]:border-white/5 dark:data-[selected]:data-[hovered]:border-white/5 dark:data-[disabled]:bg-white/[2.5%] dark:data-[selected]:bg-[--checkbox-selected-bg] dark:data-[disabled]:[--checkbox-check:theme(colors.white/50%)] dark:data-[selected]:after:block dark:data-[disabled]:data-[selected]:after:hidden sm:size-4 forced-colors:[--checkbox-check:HighlightText] forced-colors:[--checkbox-selected-bg:Highlight] forced-colors:data-[disabled]:[--checkbox-check:Highlight] dark:forced-colors:[--checkbox-check:HighlightText] dark:forced-colors:[--checkbox-selected-bg:Highlight] dark:forced-colors:data-[disabled]:[--checkbox-check:Highlight]",
      colorClasses[color],
      className,
    )}
    {...props}
  >
    <svg
      className="size-4 stroke-[--checkbox-check] opacity-0 group-data-[selected]:opacity-100 sm:h-3.5 sm:w-3.5"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        className="opacity-100 group-data-[indeterminate]:opacity-0"
        d="M3 8L6 11L11 3.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="opacity-0 group-data-[indeterminate]:opacity-100"
        d="M3 7H11"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </RACheckbox>
);

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ children, className, ...props }) => (
  <RACheckboxGroup
    className={clsx(
      "space-y-3 has-[[data-slot=description]]:space-y-6 [&_[data-slot=label]]:has-[[data-slot=description]]:font-medium",
      className,
    )}
    data-slot="control"
    {...props}
  >
    {children}
  </RACheckboxGroup>
);

export type CheckboxFieldProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  isDisabled?: boolean;
};

export const CheckboxField: React.FC<CheckboxFieldProps> = ({ isDisabled, children, className, ...props }) => (
  <div
    className={clsx(
      "grid grid-cols-[1.125rem_1fr] items-center gap-x-4 gap-y-1 sm:grid-cols-[1rem_1fr] [&>[data-slot=control]]:col-start-1 [&>[data-slot=control]]:row-start-1 [&>[data-slot=control]]:justify-self-center [&>[data-slot=description]]:col-start-2 [&>[data-slot=description]]:row-start-2 [&>[data-slot=label]]:col-start-2 [&>[data-slot=label]]:row-start-1 [&>[data-slot=label]]:justify-self-start [&_[data-slot=label]]:has-[[data-slot=description]]:font-medium",
      className,
    )}
    data-slot="field"
    data-disabled={isDisabled}
    aria-disabled={isDisabled}
    {...props}
  >
    {children}
  </div>
);
