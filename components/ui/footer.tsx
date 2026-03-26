import { SOCIALMEDIA } from "@/lib/constants";
import { SocialMediaButton } from "./social-media-button";

export const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside className="md:w-1/3">
        <h3 className="text-4xl font-oswald">Fausto Durazo</h3>
        <p>
          Welcome to a creative space where marketing meets filmmaking, music,
          and social media to tell compelling stories. Here, ideas turn into
          cinematic content designed to connect, engage, and leave a lasting
          impact.
        </p>
      </aside>
      <nav className="md:w-2/3">
        <h6 className="footer-title">Social</h6>
        <div className="flex space-x-2">
          {SOCIALMEDIA.map((social, i) => (
            <SocialMediaButton key={i} socialMedia={social} />
          ))}
        </div>
      </nav>
    </footer>
  );
};
