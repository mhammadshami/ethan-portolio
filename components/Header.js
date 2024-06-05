// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-3 sm:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-y-3 sm:gap-y-6 py-8">
          <Link href={`/`}>
            <div className="text-2xl font-semibold">
              Mohammad
              <span className="text-accent"> Al Shami</span>
            </div>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
