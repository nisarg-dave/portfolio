import Socials from "./Socials";

function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
          />
          {/* copyright */}
          <div className="text-muted-foreground">
            Built using Next.js, Tailwind CSS and shadcn-ui. Followed tutorial
            by Cristian Mihai.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
