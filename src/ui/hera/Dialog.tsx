import { DialogTrigger, Modal, ModalOverlay, Dialog as RADialog, type DialogProps } from "react-aria-components";
import { Button } from "./Button";

export const Dialog: React.FC<DialogProps> = ({ children }) => (
  <DialogTrigger>
    <Button>Delete</Button>
    <ModalOverlay className="fixed inset-0 flex w-screen justify-center overflow-y-auto bg-zinc-950/25  focus:outline-0 dark:bg-zinc-950/50">
      <Modal className="grid min-h-full grid-rows-[1fr_auto] justify-items-center sm:grid-rows-[1fr_auto_3fr] sm:p-4">
        <RADialog className="row-start-2 w-full min-w-0 rounded-t-3xl bg-white p-[--gutter] shadow-lg outline-none ring-1 ring-zinc-950/10 [--gutter:theme(spacing.8)] dark:bg-zinc-900 dark:ring-white/10 sm:mb-auto sm:max-w-lg sm:rounded-2xl forced-colors:outline">
          {children}
        </RADialog>
      </Modal>
    </ModalOverlay>
  </DialogTrigger>
);
