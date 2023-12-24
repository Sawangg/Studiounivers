"use client";

import { Button } from "@ui/Button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-10">
      <h1 className="mb-4 font-title text-2xl">Erreur lors de la récupération des produits</h1>
      <Button color="primary" onClick={reset}>
        Réessayer
      </Button>
    </div>
  );
}
