"use client";

import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import Link from "next/link";

interface SocialsProps {
  containerStyles: string;
  iconsStyles: string;
}

const icons = [
  {
    path: "https://www.linkedin.com/in/nisarg-dave-6274191a0/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/nisarg-dave",
    name: <RiGithubFill />,
  },
];

function Socials({ containerStyles, iconsStyles }: SocialsProps) {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default Socials;
