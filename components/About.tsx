import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User2, MailIcon, GraduationCap, Briefcase } from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Nisarg Dave",
  },
  {
    icon: <MailIcon size={20} />,
    text: "ndave630@gmail.com",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor of Science (Software Engineering and Data Science)",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "University of Western Australia",
        qualifaction:
          "Bachelor of Science (Software Engineering and Data Science)",
        years: "2018 - 2021",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Coders for Causes",
        title: "Volunteer",
        years: "2021 - 2022",
      },
      {
        company: "Vizcom Technologies",
        title: "Software Developer",
        years: "2022 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript, PHP",
      },
      {
        name: "Back-end Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

function About() {
  const getData = (
    arr: {
      title: string;
      data: {
        university?: string;
        qualifaction?: string;
        years?: string;
        company?: string;
        title?: string;
        name?: string;
        imgPath?: string;
      }[];
    }[],
    title: string
  ) => {
    return arr.find((item) => item.title === title);
  };
  return <div>About</div>;
}

export default About;
