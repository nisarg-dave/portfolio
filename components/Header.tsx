"use client";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mt-2">
          <Logo />
          <div className="flex">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center mr-6"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
