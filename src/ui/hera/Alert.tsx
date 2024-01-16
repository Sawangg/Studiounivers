import clsx from "clsx";
import { Modal, ModalOverlay, Dialog as RADialog, type DialogProps as RADialogProps } from "react-aria-components";

export const sizes = {
  xs: "sm:max-w-xs",
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  "2xl": "sm:max-w-2xl",
  "3xl": "sm:max-w-3xl",
  "4xl": "sm:max-w-4xl",
  "5xl": "sm:max-w-5xl",
};

export type AlertProps = RADialogProps & {
  open?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  size?: keyof typeof sizes;
};

export const Alert: React.FC<AlertProps> = ({ open, onOpenChange, size = "md", children, className, ...props }) => (
  <ModalOverlay
    className="fixed inset-0 grid min-h-full w-screen grid-rows-[1fr_auto_1fr] justify-items-center overflow-y-auto bg-zinc-950/25 p-8 focus:outline-0 dark:bg-zinc-950/50 sm:grid-rows-[1fr_auto_3fr] sm:p-4"
    isOpen={open}
    onOpenChange={onOpenChange}
    isDismissable
  >
    <Modal className={({ isEntering }) => (isEntering ? "row-start-2 duration-300 ease-out" : "row-start-2")}>
      <RADialog
        className={clsx(
          "w-full rounded-2xl bg-white p-8 shadow-lg outline-none ring-1 ring-zinc-950/10 dark:bg-zinc-900 dark:ring-white/10 sm:rounded-2xl sm:p-6",
          sizes[size],
          className,
        )}
        role="alertdialog"
        {...props}
      >
        {children}
      </RADialog>
    </Modal>
  </ModalOverlay>
);

export type AlertFooterProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const AlertFooter: React.FC<AlertFooterProps> = ({ children, className, ...props }) => (
  <div
    className={clsx(
      "mt-6 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:mt-4 sm:flex-row sm:*:w-auto",
      className,
    )}
    data-slot="control"
    {...props}
  >
    {children}
  </div>
);
