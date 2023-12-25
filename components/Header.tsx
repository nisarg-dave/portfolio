"use client";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div>
            <Nav />
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
