import Link from "next/link";
import clsx from "clsx";

export type TextProps = React.DetailedHTMLProps<
  React.ParamHTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  as?: string;
};

export const Text: React.FC<TextProps> = ({ as, className, children, ...props }) => (
  <p
    className={clsx(className, `text-base/6 text-zinc-500 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-zinc-400`)}
    data-slot={as === "description" ? "description" : undefined}
    {...props}
  >
    {children}
  </p>
);

export const Strong: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({
  className,
  children,
  ...props
}) => (
  <strong className={clsx(className, `font-medium text-zinc-950 dark:text-white`)} {...props}>
    {children}
  </strong>
);

export type TextLinkProps = Omit<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  "ref"
> & { href: string };

export const TextLink: React.FC<TextLinkProps> = ({ href, className, children, ...props }) => (
  <Link
    className={clsx(
      className,
      "text-zinc-950 underline decoration-zinc-950/50 hover:decoration-zinc-950 dark:text-white dark:decoration-white/50 dark:hover:decoration-white",
    )}
    href={href}
    {...props}
  >
    {children}
  </Link>
);

export const Code: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({
  className,
  children,
  ...props
}) => (
  <code
    className={clsx(
      className,
      `rounded border border-zinc-950/10 bg-zinc-950/[2.5%] px-0.5 text-sm font-medium text-zinc-950 sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-white`,
    )}
    {...props}
  >
    {children}
  </code>
);
