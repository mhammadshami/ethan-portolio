// links
import Link from "next/link";
import { BiLogoLinkedinSquare } from "react-icons/bi";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiPinterestLine,
  RiBehanceLine,
} from "react-icons/ri";
import { FiPhone } from "react-icons/fi";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.linkedin.com/in/mohammad-elshami-1286661a6/"}
        className="hover:text-accent text-[25px] transition-all duration-300"
        target="_blank"
      >
        <BiLogoLinkedinSquare />
      </Link>
      <Link
        href={""}
        className="hover:text-accent text-[15px] transition-all duration-300 flex items-center gap-1"
      >
        <FiPhone />
        <span>+96176712035</span>
      </Link>
      {/* <Link
        href={""}
        className="hover:text-accent transition-all duration-300 "
      >
        <RiInstagramLine />
      </Link> */}
      {/* <Link
        href={""}
        className="hover:text-accent transition-all duration-300 "
      >
        <RiDribbbleLine />
      </Link> */}
      {/* <Link
        href={""}
        className="hover:text-accent transition-all duration-300 "
      >
        <RiBehanceLine />
      </Link>
      <Link
        href={""}
        className="hover:text-accent transition-all duration-300 "
      >
        <RiPinterestLine />
      </Link> */}
    </div>
  );
};

export default Socials;
