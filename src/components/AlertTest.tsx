"use client";

import { useState } from "react";
import { Alert, AlertFooter } from "@ui/hera/Alert";
import { Button } from "@ui/hera/Button";
import { Heading } from "@ui/hera/Heading";
import { Text } from "@ui/hera/Text";

export const AlertTest: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open alert</Button>
      <Alert open={isOpen} onOpenChange={setOpen}>
        <Heading
          level={2}
          slot="title"
          className="text-balance text-center text-base/6 font-semibold text-zinc-950 dark:text-white sm:text-wrap sm:text-left sm:text-sm/6"
        >
          Are you sure you want to refund this payment?
        </Heading>
        <Text>The refund will be reflected in the customer’s bank account 2 to 3 business days after processing.</Text>
        <AlertFooter>
          <Button onPress={() => setOpen(false)} plain>
            Cancel
          </Button>
          <Button onPress={() => setOpen(false)}>Refund</Button>
        </AlertFooter>
      </Alert>
    </>
  );
};
