// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { GrDeploy } from "react-icons/gr";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { FaDatabase, FaPaintBrush } from "react-icons/fa";

// data
const serviceData = [
  {
    icon: <FaPaintBrush />,
    title: "Front End Development",
    description:
      "I excel in crafting seamless, mobile-friendly user interfaces using the React ecosystem",
  },
  {
    icon: <FaDatabase />,
    title: "Back End Development",
    description:
      "Building robust and scalable server-side applications with Express.js and Drizzle ORM, I specialize in creating efficient APIs and managing databases like MySQL, PostgreSQL, and MongoDB.",
  },
  {
    icon: <GrDeploy />,
    title: "Deployment",
    description:
      "Deployment react projects using (Vercel, Netlify, AWS Amplify)",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-auto "
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index} className="">
            <div className="min-h-[383px] bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-6">{item.description}</p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
