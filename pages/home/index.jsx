// next image
import Image from "next/image";
// components
import ParticlesContainer from "../../components/ParticlesContainer";
import ProjectsBtn from "../../components/ProjectsBtn";
import Avatar from "../../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full ">
      {/* text */}
      <div>
        <div>
          {/* title */}
          <h1>
            Transforming Ideas <br /> Into <span>Digital Reality</span>
          </h1>
        </div>
      </div>
      {/* image */}
      <div>image</div>
    </div>
  );
};

export default Home;
