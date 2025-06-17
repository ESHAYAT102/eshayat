export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 0,
    name: "ESYT",
    description:
      "ESYT | React Project Starter/Scaffolding CLI Tool.",
    github: "https://github.com/ESHAYAT102/esyt",
    demo: "https://esyt.eshayat.com",
    image: "/projects/esyt.png",
    available: true,
  },
  {
    id: 1,
    name: "Profile Page Template",
    description:
      "Template For Basic Profile Website.",
    github: "https://github.com/ESHAYAT102/Profile",
    demo: "https://profile.eshayat.com",
    image: "/projects/profile.png",
    available: true,
  },
  {
    id: 2,
    name: "Blog",
    description:
      "My Personal Blog Page.",
    github: "https://github.com/ESHAYAT102/Blog",
    demo: "https://blog.eshayat.com",
    image: "/projects/blog.png",
    available: true,
  },
];
