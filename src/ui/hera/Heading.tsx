import clsx from "clsx";
import { Heading as RAHeading, type HeadingProps } from "react-aria-components";

export const Heading: React.FC<HeadingProps> = ({ level = 1, className, children, ...props }) => (
  <RAHeading
    level={level}
    className={clsx(
      className,
      "mb-2 font-semibold text-zinc-900 dark:text-white",
      level === 1 && "text-xl leading-loose",
      level === 2 && "text-base",
      level === 3 && "text-[1rem]",
    )}
    data-slot="title"
    {...props}
  >
    {children}
  </RAHeading>
);

// TODO: Handle sm:
