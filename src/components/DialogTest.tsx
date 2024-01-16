"use client";

import { useState } from "react";
import { Button } from "@ui/hera/Button";
import { Dialog, DialogFooter } from "@ui/hera/Dialog";
import { Heading } from "@ui/hera/Heading";
import { Input } from "@ui/hera/Input";
import { Text } from "@ui/hera/Text";

export const DialogTest: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open dialog</Button>
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <Heading level={2} slot="title">
          Refund payment
        </Heading>
        <Text>The refund will be reflected in the customer’s bank account 2 to 3 business days after processing.</Text>
        <Input placeholder="$0.00" />
        <DialogFooter>
          <Button onPress={() => setOpen(false)} plain>
            Cancel
          </Button>
          <Button onPress={() => setOpen(false)}>Refund</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
