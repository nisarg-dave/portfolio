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
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[300px] h-[300px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:nax-w-[520px] xl:border dark:border-none">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div>
                {/* personal */}
                <TabsContent value="personal">Personal Info</TabsContent>
                <TabsContent value="qualifications">
                  Qualifications Info
                </TabsContent>
                <TabsContent value="skills">Skills Info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
