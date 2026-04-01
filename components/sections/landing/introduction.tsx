import { LandingSection } from "@/components/ui/landing-section";
import Image from "next/image";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { WorkBrands } from "./work-brands";
import { FaInstagram } from "react-icons/fa";
import { SOCIALMEDIA } from "@/lib/constants";
import { SocialLink } from "@/components/ui/social-link";
import { WorkSections } from "./work-sections";
export const Introduction = () => {
  return (
    <LandingSection>
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="flex flex-col h-full w-full">
          <section className="flex items-center justify-center">
            <aside className="absolute bottom-20 z-20">
              <Image
                src="/img/Landing/iam_1.avif"
                alt="Fausto Durazo"
                width={400}
                height={500}
              />
            </aside>
            <main className="absolute bottom-30 z-30">
              <Link className="btn btn-primary" href="/contact">
                <IoMdMail />
                Contact Me
              </Link>
            </main>
          </section>
          <section className="flex flex-col h-full">
            <header className="flex py-45 text-center justify-center">
              {/* <a
                href="/files/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-5"
              >
                <FaFileAlt />
                Resume
              </a> */}
              <h1 className="text-4xl font-bold">WHO IS FAUSTO DURAZO?</h1>
            </header>
            <main className=" flex justify-between">
              <ul className="w-1/3 flex flex-col items-center text-2xl">
                <WorkSections />
              </ul>
              <aside className="w-1/3 flex flex-col items-center space-y-2">
                {SOCIALMEDIA.map((socialMedia, i) => (
                  <div
                    key={socialMedia.name}
                    className="animate-fade-in opacity-0 w-full flex justify-center"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    <SocialLink socialMedia={socialMedia} />
                  </div>
                ))}
              </aside>
            </main>
          </section>
          <section className="mt-auto w-full mb-20">
            <WorkBrands />
          </section>
        </div>
      </div>
    </LandingSection>
  );
};
