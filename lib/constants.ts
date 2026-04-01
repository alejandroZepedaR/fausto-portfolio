import { IconType } from "react-icons";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export interface SocialMediaType {
  link: string;
  icon: IconType;
  name: string;
}

export interface Links {
  name: string;
  href: string;
}

export const LINKS: Links[] = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export const SOCIALMEDIA: SocialMediaType[] = [
  {
    link: "https://instagram.com",
    icon: FaInstagram,
    name: "Instagram",
  },
  {
    link: "https://youtube.com",
    icon: FaYoutube,
    name: "YouTube",
  },
  {
    link: "https://linkedin.com",
    icon: FaLinkedin,
    name: "LinkedIn",
  },
];

interface JobIcon {
  img: string;
  alt: string;
}
export const JOB_ICONS: JobIcon[] = [
  {
    img: "/img/brands/bill_luke.avif",
    alt: "Bill Luke Marana",
  },
  {
    img: "/img/brands/dvl.jpg",
    alt: "DVL Marketing",
  },
  {
    img: "/img/brands/ua.png",
    alt: "University of Arizona",
  },
  {
    img: "/img/brands/aaf.png",
    alt: "AAF Tucson",
  },
];

export const WHO_AMI =
  "I’m a Mexican Social Media Manager currently based in Tucson, Arizona, with a passion for combining creative storytelling and data-driven strategy to connect brands with audiences. I earned my B.A. in Film and Television from the University of Arizona and am now pursuing a Master of Science in Marketing to strengthen my expertise in brand strategy and digital engagement. My experience includes leading multi-platform growth strategies as Social Media Manager at Bill Luke Marana. My film background enhances my marketing work, allowing me to create visually compelling, impactful campaigns that resonate with audiences and drive measurable results.";
