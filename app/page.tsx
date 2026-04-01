import Image from "next/image";
import { Introduction } from "@/components/sections/landing/introduction";
import { LandingProjects } from "@/components/sections/landing/landing-projects";
import { ALL_PROJECTS } from "@/lib/projects";
import { ContentTogether } from "@/components/sections/content-together";
export default function Home() {
  return (
    <div>
      <Introduction />
      {/* <LandingProjects projects={ALL_PROJECTS} />
      <ContentTogether /> */}
    </div>
  );
}
