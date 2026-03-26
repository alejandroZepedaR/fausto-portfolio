import { SocialMediaType } from "@/lib/constants";

export const SocialMediaButton = ({
  socialMedia,
}: {
  socialMedia: SocialMediaType;
}) => {
  return (
    <a
      href={socialMedia.link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-sm lg:btn-md"
    >
      <socialMedia.icon size={20} />
    </a>
  );
};
