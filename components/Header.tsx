"use client";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function Header() {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", scrollYPos);
    return () => window.removeEventListener("scroll", scrollYPos);
  });
  return (
    <header
      className={` ${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
}

export default Header;
