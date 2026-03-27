import { LandingSection } from "@/components/ui/landing-section";
import { SectionHeader } from "@/components/ui/section-header";
import { WHO_AMI } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
export const Introduction = () => {
  return (
    <LandingSection>
      <SectionHeader title="WHO IS FAUSTO DURAZO ?" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row md:w-10/12 items-center justify-between ">
          <aside className="flex md:hidden mb-2">
            <Image
              src="/img/Landing/iam_1.avif"
              alt="Fausto Durazo"
              width={300}
              height={400}
              className="w-full h-auto object-cover"
            />
            <Image
              src="/img/Landing/iam_2.avif"
              alt="Fausto Durazo"
              width={300}
              height={400}
              className="w-full h-auto object-cover"
            />
          </aside>
          <main className="px-2 md:text-2xl w-full md:w-3/4">
            <p>{WHO_AMI}</p>
            <div className="flex space-x-2">
              <a
                href="/files/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-5"
              >
                <FaFileAlt />
                Resume
              </a>
              <Link href="/contact" className="btn btn-secondary mt-5">
                <IoMdMail />
                Contact
              </Link>
            </div>
          </main>
          <aside className="hidden md:block  md:relative w-full h-125">
            {/* Image 1 */}
            <div className="absolute top-0 left-[60%] -translate-x-1/2 w-[45%] z-20 aspect-3/4">
              <img
                src="img/Landing/iam_1.avif"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Image 2 */}
            <div className="absolute top-[60%] left-[5%] w-[40%] z-10 aspect-3/4">
              <img
                src="img/Landing/iam_2.avif"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </aside>
        </div>
      </div>
    </LandingSection>
  );
};
