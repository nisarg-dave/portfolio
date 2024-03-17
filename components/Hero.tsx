import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { RiArrowDownSLine } from "react-icons/ri";

import DevImg from "./DevImg";
import Socials from "./Socials";

function Hero() {
  return (
    <section className="py-12 xl:py-23 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-cover bg-bottom dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Software Developer
            </div>
            <h1 className="h1">Hello, my name is Nisarg Dave</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0 mt-3">
              I&apos;m a curious coder, always iterating on myself.
            </p>
            {/* Buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <a href="/resume/Nisarg Dave Resume.pdf">
                <Button variant="secondary" className="gap-x-2">
                  Download Resume <Download size={18} />
                </Button>
              </a>
            </div>
            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* Image */}
          <div className="hidden xl:flex relative">
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 right-"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[300px] h-[300px] bg-no-repeat relative bg-bottom top-20 right-32"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>
        {/* Icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
