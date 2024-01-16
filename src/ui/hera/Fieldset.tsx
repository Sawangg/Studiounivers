import clsx from "clsx";
import { TextField as RATextfield, type TextFieldProps as FieldSetProps } from "react-aria-components";

export type LegendProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;

export const Legend: React.FC<LegendProps> = ({ children, className, ...props }) => (
  <legend
    className={clsx(
      className,
      "text-base/6 font-semibold text-zinc-950 data-[disabled]:opacity-50 dark:text-white sm:text-sm/6",
    )}
    data-slot="legend"
    {...props}
  >
    {children}
  </legend>
);

// Add disabled
export const FieldSet: React.FC<FieldSetProps> = ({ children, className, ...props }) => (
  <RATextfield
    className={clsx(
      "[&>*+[data-slot=control]]:mt-6 [&>[data-slot=control]+[data-slot=description]]:mt-3 [&>[data-slot=control]+[data-slot=error]]:mt-3 [&>[data-slot=description]+[data-slot=control]]:mt-3 [&>[data-slot=label]+[data-slot=control]]:mt-3 [&>[data-slot=label]+[data-slot=description]]:mt-1 [&>[data-slot=label]]:font-medium [&>[data-slot=text]]:mt-1",
      className,
    )}
    data-slot="field"
    {...props}
  >
    {children}
  </RATextfield>
);
