import Link from "next/link";

const links = [
  { href: "/filmmaking", label: "Filmmaking" },
  { href: "/commercial-video", label: "Commercial Video" },
  { href: "/motion-graphics", label: "Motion Graphics" },
  { href: "/design", label: "Design" },
];

export const WorkSections = () => {
  return (
    <>
      {links.map((link, i) => (
        <li
          key={link.href}
          className="animate-fade-in opacity-0"
          style={{ animationDelay: `${i * 120}ms` }}
        >
          <Link
            href={link.href}
            className="relative inline-block transition-transform duration-300 hover:-translate-y-0.5
              after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-secondary-content
              after:transition-[width] after:duration-300 hover:after:w-full"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
};
