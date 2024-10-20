"use client";
import DevImg from "./DevImg";
import Image from "next/image";
import { useTheme } from "next-themes";
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
    title: "Education",
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
    title: "Experience",
    data: [
      {
        company: "Coders for Causes",
        role: "Volunteer",
        years: "2021 - 2022",
      },
      {
        company: "Vizcom Technologies",
        role: "Software Developer",
        years: "2022 - 2024",
      },
      {
        company: "Education Horizons",
        role: "Associate Software Engineer",
        years: "2024 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "Skills",
    data: [
      {
        name: "HTML, CSS, JavaScript",
      },
      {
        name: "React, Vue, Next.js",
      },
      {
        name: "Java, Python",
      },
      {
        name: "Typescript, Node.js",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.png",
      },
      {
        imgPath: "/about/github.png",
      },
      {
        imgPath: "/about/git.png",
      },
      {
        imgPath: "/about/intellij.png",
      },
      {
        imgPath: "/about/docker.png",
      },
    ],
  },
];

function About() {
  const theme = useTheme();
  const getData = (
    arr: {
      title: string;
      data: {
        university?: string;
        qualifaction?: string;
        years?: string;
        company?: string;
        role?: string;
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
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-auto xl:w-auto"
                  value="qualifications"
                >
                  Qualifications and Experience
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Software Developer</h3>
                    <p className="subtitle max-w-l mx-auto xl:mx-0">
                      I&apos;m a passionate developer on a constant learning
                      journey. I believe curiosity is the fuel for innovation,
                      so I actively seek out new technologies and challenges to
                      expand my skillset. I get genuinely excited about tackling
                      complex problems, crafting elegant solutions, and seeing
                      my code come to life.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-1 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience and education wrapper */}
                    <div>
                      {/* experience */}
                      <div>
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Experience")?.title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8 mt-2">
                          {getData(qualificationData, "Experience")
                            ?.data.toReversed()
                            .map((item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="ml-10">
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-2">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                      {/* education */}
                      <div>
                        <div className="flex gap-x-4 items-center text-[22px] text-primary mt-4">
                          <GraduationCap />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Education")?.title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8 mt-2">
                          {getData(qualificationData, "Education")
                            ?.data.toReversed()
                            .map((item, index) => {
                              const { university, qualifaction, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="ml-10">
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-2">
                                      {qualifaction}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8"> My Favourite Tools</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skills list */}
                      <div>
                        {getData(skillData, "Skills")?.data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                key={index}
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tools list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools")?.data.map(
                          (item, index) => {
                            const { imgPath } = item;
                            let selectedImgPath: string;
                            if (imgPath === "/about/github.png") {
                              selectedImgPath =
                                theme.theme === "dark"
                                  ? "/about/github-dark.svg"
                                  : imgPath;
                            } else {
                              selectedImgPath = imgPath!;
                            }
                            console.debug(selectedImgPath);
                            return (
                              <div key={index}>
                                <Image
                                  src={selectedImgPath}
                                  width={48}
                                  height={48}
                                  alt=""
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
