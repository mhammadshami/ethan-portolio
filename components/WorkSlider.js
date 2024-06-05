// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Student Website",
          path: "/work/project1.png",
          link: "https://flourishing-creponne-94c599.netlify.app/",
        },
        {
          title: "NGOi Website",
          path: "/work/project2.png",
          link: null,
          isPrivate: true,
          desc: "NGOi Website (private platform)",
        },
        {
          title: "School system Website",
          path: "/work/project3.jpg",
          link: null,
          isPrivate: true,
          desc: "School system (private platform)",
        },
        {
          title: "Transactions Application",
          path: "/work/project3.png",
          link: null,
          isPrivate: true,
          desc: "Transactions App (private platform)",
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
                      !image.isPrivate && window.open(image.link, "_blank");
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
                          {image.isPrivate ? (
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              {image.desc}
                            </div>
                          ) : (
                            <>
                              {" "}
                              <div className="delay-100">LIVE</div>
                              <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                PROJECT
                              </div>
                            </>
                          )}

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
