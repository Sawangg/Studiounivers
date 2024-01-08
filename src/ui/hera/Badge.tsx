import clsx from "clsx";

const colorClasses = {
  red: "bg-red-400/20 text-red-700 group-data-[hovered]:bg-red-400/30 dark:bg-red-400/10 dark:text-red-300 dark:group-data-[hover]:bg-red-400/15",
  orange:
    "bg-orange-400/20 text-orange-700 group-data-[hovered]:bg-orange-400/30 dark:bg-orange-400/10 dark:text-orange-300 dark:group-data-[hover]:bg-orange-400/15",
  amber:
    "bg-amber-400/20 text-amber-700 group-data-[hovered]:bg-amber-400/30 dark:bg-amber-400/10 dark:text-amber-300 dark:group-data-[hover]:bg-amber-400/15",
  yellow:
    "bg-yellow-400/20 text-yellow-700 group-data-[hovered]:bg-yellow-400/30 dark:bg-yellow-400/10 dark:text-yellow-300 dark:group-data-[hover]:bg-yellow-400/15",
  lime: "bg-lime-400/20 text-lime-700 group-data-[hovered]:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-[hover]:bg-lime-400/15",
  green:
    "bg-green-400/20 text-green-700 group-data-[hovered]:bg-green-400/30 dark:bg-green-400/10 dark:text-green-300 dark:group-data-[hover]:bg-green-400/15",
  emerald:
    "bg-emerald-400/20 text-emerald-700 group-data-[hovered]:bg-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300 dark:group-data-[hover]:bg-emerald-400/15",
  teal: "bg-teal-400/20 text-teal-700 group-data-[hovered]:bg-teal-400/30 dark:bg-teal-400/10 dark:text-teal-300 dark:group-data-[hover]:bg-teal-400/15",
  cyan: "bg-cyan-400/20 text-cyan-700 group-data-[hovered]:bg-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300 dark:group-data-[hover]:bg-cyan-400/15",
  sky: "bg-sky-400/20 text-sky-700 group-data-[hovered]:bg-sky-400/30 dark:bg-sky-400/10 dark:text-sky-300 dark:group-data-[hover]:bg-sky-400/15",
  blue: "bg-blue-400/20 text-blue-700 group-data-[hovered]:bg-blue-400/30 dark:bg-blue-400/10 dark:text-blue-300 dark:group-data-[hover]:bg-blue-400/15",
  indigo:
    "bg-indigo-500/15 text-indigo-700 group-data-[hovered]:bg-indigo-500/25 dark:bg-indigo-400/10 dark:text-indigo-300 dark:group-data-[hover]:bg-indigo-400/15",
  violet:
    "bg-violet-400/20 text-violet-700 group-data-[hovered]:bg-violet-400/30 dark:bg-violet-400/10 dark:text-violet-300 dark:group-data-[hover]:bg-violet-400/15",
  purple:
    "bg-purple-400/20 text-purple-700 group-data-[hovered]:bg-purple-400/30 dark:bg-purple-400/10 dark:text-purple-300 dark:group-data-[hover]:bg-purple-400/15",
  fuchsia:
    "bg-fuchsia-400/20 text-fuchsia-700 group-data-[hovered]:bg-fuchsia-400/30 dark:bg-fuchsia-400/10 dark:text-fuchsia-300 dark:group-data-[hover]:bg-fuchsia-400/15",
  pink: "bg-pink-400/20 text-pink-700 group-data-[hovered]:bg-pink-400/30 dark:bg-pink-400/10 dark:text-pink-300 dark:group-data-[hover]:bg-pink-400/15",
  rose: "bg-rose-400/20 text-rose-700 group-data-[hovered]:bg-rose-400/30 dark:bg-rose-400/10 dark:text-rose-300 dark:group-data-[hover]:bg-rose-400/15",
  zinc: "bg-zinc-400/20 text-zinc-700 group-data-[hovered]:bg-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-300 dark:group-data-[hover]:bg-zinc-400/15",
};

export type BadgeProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
  color?: keyof typeof colorClasses;
};

export const Badge: React.FC<BadgeProps> = ({ color = "zinc", className, children, ...props }) => {
  return (
    <span
      className={clsx(
        className,
        "inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline",
        colorClasses[color],
      )}
      {...props}
    >
      {children}
    </span>
  );
};
