// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Twitter Clone",
          path: "/learning-projects/project14.png",
          link: "https://twitter-clone-alpha-topaz.vercel.app/",
        },
        {
          title: "Movies App",
          path: "/learning-projects/project15.png",
          link: "https://movies-app-gold-ten-50.vercel.app/",
        },
        {
          title: "VR Landing Page",
          path: "/learning-projects/project8.png",
          link: "https://vr-landing-page-eight.vercel.app/",
        },
        {
          title: "Cryptocurrency Landing Page",
          path: "/learning-projects/project9.png",
          link: "https://cryptocurrency-landing-page-eight.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "Yoga Landing Page",
          path: "/learning-projects/project5.png",
          link: "https://yoga-landing-page-tu82.vercel.app/",
        },
        {
          title: "Creative Portfolio",
          path: "/learning-projects/project6.png",
          link: "https://responsive-resume-website.vercel.app/",
        },
        {
          title: "Weather App",
          path: "/learning-projects/project2.png",
          link: "https://weather-app-mauve-mu.vercel.app",
        },
        {
          title: "Expense Landing Page",
          path: "/learning-projects/project3.png",
          link: "https://xpense-landing-page-seven.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "Furniture Website",
          path: "/learning-projects/project11.png",
          link: "https://furniture-website-flax.vercel.app/",
        },

        {
          title: "Date Warehouse Landing Page",
          path: "/learning-projects/project10.png",
          link: "https://data-warehouse-landing-page-gules.vercel.app/",
        },

        {
          title: "Trafico Landing Page",
          path: "/learning-projects/project4.png",
          link: "https://trafico-landing-page.vercel.app/",
        },
        {
          title: "Restaurant Landing Page",
          path: "/learning-projects/project1.png",
          link: "https://restaurant-landing-page-39mwfyvnb-mhammadshami.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "Tattoo Landing Page",
          path: "/learning-projects/project12.png",
          link: "https://tattoo-landing-page-6eut.vercel.app/",
        },
        {
          title: "Car Landing Page",
          path: "/learning-projects/project13.png",
          link: "https://car-landing-page-pi.vercel.app/",
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// next image
import Image from "next/image";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-auto sm:h-[480px] pb-[30px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative h-[212px] rounded-lg overflow-hidden flex items-center justify-center group"
                    onClick={() => {
                      window.open(image.link, "_blank");
                    }}
                  >
                    <div className="h-full flex items-center justify-center relative overflow-hidden group">
                      {/* image */}{" "}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt=""
                        className="h-full object-cover"
                      />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
