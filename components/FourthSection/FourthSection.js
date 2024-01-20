import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { SkillsData } from "./SkillsData";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { SkillCard } from "../SkillCard";
export const FourthSection = () => {
  return (
    <section className="h-screen w-screen flex justify-center items-center absolute top-300">
      <h2 className="text-white text-3xl absolute top-6 left-1/2 -translate-x-1/2">
        Technologies I&apos;ve worked with
      </h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {SkillsData.map((skill, index) => {
          return (
            <SwiperSlide key={index}>
              <SkillCard imageSource={skill.img} title={skill.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default FourthSection;
