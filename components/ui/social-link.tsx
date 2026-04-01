import { SocialMediaType } from "@/lib/constants";

export const SocialLink = ({
  socialMedia,
}: {
  socialMedia: SocialMediaType;
}) => {
  return (
    <a
      href={socialMedia.link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-sm md:btn-md md:w-1/2 hover:text-secondary-content"
    >
      <socialMedia.icon size={20} />
      <span>{socialMedia.name}</span>
    </a>
  );
};
