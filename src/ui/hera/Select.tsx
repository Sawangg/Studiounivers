import clsx from "clsx";
import {
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  Select as RASelect,
  SelectValue,
  type SelectProps as RASelectProps,
} from "react-aria-components";
import { ChevronUpDownIcon } from "./icons/ChevronUpDownIcon";

export type SelectProps = RASelectProps<object> & {
  label: string;
};

export const Select: React.FC<SelectProps> = ({ label, className, children, ...props }) => (
  <RASelect
    className="group relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none dark:before:hidden sm:after:has-[[data-focused]]:ring-2 sm:after:has-[[data-focused]]:ring-blue-500"
    aria-label={label}
    data-slot="control"
    {...props}
  >
    <Button
      className={clsx(
        "relative block w-full cursor-pointer appearance-none rounded-lg border border-zinc-950/10 bg-transparent py-[calc(theme(spacing[2.5])-1px)] pl-[calc(theme(spacing[3.5])-1px)] pr-[calc(theme(spacing.10)-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 focus:outline-none data-[disabled]:border-zinc-950/20 data-[hovered]:border-zinc-950/20 data-[invalid]:border-red-500 data-[invalid]:data-[hovered]:border-red-500 data-[disabled]:opacity-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:*:text-white dark:data-[hovered]:border-white/20 dark:data-[hovered]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[invalid]:dark:border-red-600 data-[invalid]:data-[hovered]:dark:border-red-600 data-[disabled]:dark:bg-white/[2.5%] sm:py-[calc(theme(spacing[1.5])-1px)] sm:pl-[calc(theme(spacing.3)-1px)] sm:pr-[calc(theme(spacing.9)-1px)] sm:text-sm/6 [&_optgroup]:font-semibold",
        className,
      )}
    >
      <SelectValue />
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" aria-hidden>
        <ChevronUpDownIcon className="size-5 stroke-zinc-500 group-has-[[data-disabled]]:stroke-zinc-600 dark:stroke-zinc-400 sm:size-4 forced-colors:stroke-[CanvasText]" />
      </span>
    </Button>
    <Popover className="min-w-[var(--trigger-width)] rounded-lg border border-zinc-950/10 bg-white p-1 text-sm/7 dark:border-white/10 dark:bg-zinc-800">
      <ListBox className="border-none focus:outline-none">{children}</ListBox>
    </Popover>
  </RASelect>
);

export type OptionProps = React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;

export const Option: React.FC<OptionProps> = ({ children }) => (
  <ListBoxItem className="cursor-pointer rounded-md pl-1 focus:outline-none data-[hovered]:bg-blue-500 data-[hovered]:text-white dark:text-white">
    {children}
  </ListBoxItem>
);
