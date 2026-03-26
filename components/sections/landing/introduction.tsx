import { LandingSection } from "@/components/ui/landing-section";
import { SectionHeader } from "@/components/ui/section-header";
import { WHO_AMI } from "@/lib/constants";
import Image from "next/image";

export const Introduction = () => {
  return (
    <LandingSection>
      <SectionHeader title="WHO IS FAUSTO DURAZO ?" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex md:w-10/12 items-center justify-center content-center">
          <main className="px-2 md:text-2xl w-3/4">
            <p>{WHO_AMI}</p>
          </main>
          <aside></aside>
        </div>
      </div>
    </LandingSection>
  );
};
