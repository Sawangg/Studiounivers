import clsx from "clsx";
import { FieldError, type FieldErrorProps } from "react-aria-components";

export const ErrorMessage: React.FC<FieldErrorProps> = ({ children, className, ...props }) => (
  <FieldError
    className={clsx("text-base/6 text-red-600 data-[disabled]:opacity-50 dark:text-red-500 sm:text-sm/6", className)}
    {...props}
  >
    {children}
  </FieldError>
);
