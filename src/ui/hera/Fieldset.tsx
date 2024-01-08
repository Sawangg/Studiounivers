import clsx from "clsx";
import { TextField as RATextfield, type TextFieldProps as FieldProps } from "react-aria-components";

export type LegendProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;

export const Legend: React.FC<LegendProps> = ({ children, className, ...props }) => (
  <legend
    className={clsx(
      className,
      "text-base/6 font-semibold text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white",
    )}
    data-slot="legend"
    {...props}
  >
    {children}
  </legend>
);

export const Field: React.FC<FieldProps> = ({ children }) => (
  <RATextfield
    className="[&>[data-slot=control]+[data-slot=description]]:mt-3 [&>[data-slot=control]+[data-slot=error]]:mt-3 [&>[data-slot=description]+[data-slot=control]]:mt-3 [&>[data-slot=label]+[data-slot=control]]:mt-3 [&>[data-slot=label]+[data-slot=description]]:mt-1 [&>[data-slot=label]]:font-medium"
    data-slot="field"
  >
    {children}
  </RATextfield>
);
