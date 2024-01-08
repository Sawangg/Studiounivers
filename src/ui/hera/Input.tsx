import clsx from "clsx";
import { Input as RAInput, type InputProps } from "react-aria-components";

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <span
      className="relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none before:has-[[data-invalid]]:shadow-red-500/10 sm:after:focus-within:ring-1 sm:after:focus-within:ring-blue-500 dark:before:hidden"
      data-slot="control"
    >
      <RAInput
        className={clsx(
          className,
          "focus:outline-nonedata-[disabled]:border-zinc-950/20 relative block w-full appearance-none rounded-lg border border-zinc-950/10 bg-transparent px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 after:pointer-events-none data-[hovered]:border-zinc-950/20 data-[invalid]:border-red-500 data-[invalid]:data-[hovered]:border-red-500 sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 dark:border-white/10 dark:bg-white/5 dark:text-white dark:data-[hovered]:border-white/20 dark:data-[hovered]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hovered]:dark:border-red-500 data-[disabled]:dark:bg-white/[2.5%]",
        )}
        {...props}
      />
    </span>
  );
};
