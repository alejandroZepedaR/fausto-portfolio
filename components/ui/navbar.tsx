import { Links, SocialMediaType } from "@/lib/constants";
import Link from "next/link";
import { SocialMediaButton } from "./social-media-button";

interface NavbarProps {
  links?: Links[];
  socialMedia?: SocialMediaType[];
  name: string;
}
export const Navbar = ({ links, name, socialMedia }: NavbarProps) => {
  return (
    <nav className="navbar bg-base-200 border-b border-secondary-content/20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm md:menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links?.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
            {socialMedia && socialMedia.length > 0 && (
              <li>
                <div className="flex space-x-2 md:space-x-0 px-2 pt-1">
                  {socialMedia.map((social) => (
                    <SocialMediaButton key={social.link} socialMedia={social} />
                  ))}
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <Link
          href="/"
          className="btn btn-ghost text-xl md:text-4xl font-oswald "
        >
          {name}
        </Link>
      </div>
    </nav>
  );
};
