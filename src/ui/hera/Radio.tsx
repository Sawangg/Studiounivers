"use client";

import clsx from "clsx";
import {
  Radio as RARadio,
  RadioGroup as RARadioGroup,
  type RadioGroupProps,
  type RadioProps,
} from "react-aria-components";

export const Radio: React.FC<RadioProps> = ({ ...props }) => (
  <RARadio {...props} className="group inline-flex cursor-pointer focus:outline-none">
    <span className="relative isolate flex size-5 shrink-0 rounded-full border border-zinc-950/15 [--radio-indicator:transparent] [--radio-selected-bg:theme(colors.zinc.900)] [--radio-selected-border:theme(colors.zinc.950/90%)] [--radio-selected-indicator:theme(colors.white)] before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-white before:shadow after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_1px_theme(colors.white/15%)] group-data-[disabled]:border-zinc-950/25 group-data-[hovered]:border-zinc-950/30 group-data-[selected]:border-transparent group-data-[selected]:group-data-[hovered]:border-transparent group-data-[disabled]:bg-zinc-950/5 group-data-[selected]:bg-[--radio-selected-border] group-data-[disabled]:opacity-50 group-data-[focused]:outline group-data-[focused]:outline-2 group-data-[focused]:outline-offset-2 group-data-[focused]:outline-blue-500 group-data-[disabled]:[--radio-selected-indicator:theme(colors.zinc.950/50%)] group-data-[hovered]:[--radio-indicator:theme(colors.zinc.900/10%)] group-data-[selected]:[--radio-indicator:var(--radio-selected-indicator)] group-data-[selected]:group-data-[hovered]:[--radio-indicator:var(--radio-selected-indicator)] before:group-data-[selected]:bg-[--radio-selected-bg] group-data-[disabled]:before:bg-transparent dark:border-white/15 dark:bg-white/5 dark:[--radio-selected-bg:theme(colors.zinc.600)] dark:before:hidden dark:after:-inset-px dark:after:hidden dark:after:rounded-full dark:group-data-[disabled]:border-white/20 dark:group-data-[hovered]:border-white/30 dark:group-data-[selected]:border-white/5 dark:group-data-[selected]:group-data-[hovered]:border-white/5 dark:group-data-[disabled]:bg-white/[2.5%] dark:group-data-[selected]:bg-[--radio-selected-bg] dark:group-data-[disabled]:[--radio-selected-indicator:theme(colors.white/50%)] dark:group-data-[hovered]:[--radio-indicator:theme(colors.zinc.700)] dark:group-data-[selected]:group-data-[hovered]:[--radio-indicator:var(--radio-selected-indicator)] dark:group-data-[selected]:after:block dark:group-data-[disabled]:group-data-[selected]:after:hidden sm:size-[1.0625rem]">
      <span className="size-full rounded-full border-[4.5px] border-transparent bg-[--radio-indicator] bg-clip-padding forced-colors:border-[Canvas] forced-colors:group-data-[selected]:border-[Highlight]"></span>
    </span>
  </RARadio>
);

export const RadioGroup: React.FC<RadioGroupProps> = ({ children }) => (
  <RARadioGroup
    className="space-y-3 has-[[data-slot=description]]:space-y-6 [&_[data-slot=label]]:font-normal [&_[data-slot=label]]:has-[[data-slot=description]]:font-medium"
    data-slot="control"
  >
    {children}
  </RARadioGroup>
);

export type RadioFieldProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  isDisabled?: boolean;
};

export const RadioField: React.FC<RadioFieldProps> = ({ children, className, ...props }) => (
  <div
    className={clsx(
      "grid grid-cols-[1.125rem_1fr] items-center gap-x-4 gap-y-1 sm:grid-cols-[1rem_1fr] [&>[data-slot=control]]:col-start-1 [&>[data-slot=control]]:row-start-1 [&>[data-slot=control]]:justify-self-center [&>[data-slot=description]]:col-start-2 [&>[data-slot=description]]:row-start-2 [&>[data-slot=label]]:col-start-2 [&>[data-slot=label]]:row-start-1 [&>[data-slot=label]]:justify-self-start [&_[data-slot=label]]:has-[[data-slot=description]]:font-medium",
      className,
    )}
    data-slot="field"
    {...props}
  >
    {children}
  </div>
);
