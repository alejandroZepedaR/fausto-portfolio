export type ProjectType = {
  title: string;
  description?: string;
  completeDescription: string;
  image?: string;
  viewLink?: string;
};

export const ALL_PROJECTS: ProjectType[] = [
  {
    title: "Bill Luke Marana",
    completeDescription:
      "As a Social Media Manager, I developed engagement growth strategies across Facebook, TikTok, and Instagram, produced video, photo, and graphic design assets using Adobe Creative Suite, and tracked social trends and analytics to guide content decisions.",
    image: "/img/projects/bill_luke.avif",
  },
  {
    title: "Digital Futures Bilingual Studio",
    completeDescription:
      "I produced and oversaw more than 50 video projects for the University of Arizona’s digital platforms, leading a team of over 10 student creators while coordinating interviews, story development, and media opportunities from concept to final delivery.",
    description: "Produced and oversaw more than 50 video projects.",
    image: "/img/projects/bill_luke.avif",
  },
  {
    title: "DVL Film House",
    description:
      "Edited over 10 projects ranging from documentaries to government and commercial videos",
    completeDescription:
      "I edited over 10 projects ranging from documentaries to government and commercial videos, created motion graphics using After Effects and Davinci Resolve, and contributed on set as a Sound Mixer, Gaffer, and Second Unit Director.",
    image: "/img/projects/dvl.jpg",
  },
];
