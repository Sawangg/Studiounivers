import { FeatureAbout } from "@components/landing/FeatureAbout";
import { Features } from "@components/landing/Features";
import { Newsletter } from "@components/landing/Newsletter";

export default function Page() {
  return (
    <>
      <div className="my-24">
        <h1 className="text-center font-title text-5xl">
          Une marque fondée sur l&apos;amour de l&apos;artisanat, de la qualité <br />
          et d&apos;un service clientèle exceptionnel.
        </h1>
      </div>
      <FeatureAbout />
      <Features />
      <Newsletter />
    </>
  );
}
