"use client";
import React from "react";
import { Pagination, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Details from "./details";

interface PropsType {
  items: { id: number; icon: string; title: string; text: string }[];
}

const SwiperAboutUs = ({ items }: PropsType) => {
  const one = items?.slice(2, 4);
  const two = items?.slice(0, 2);

  return (
    <div className="w-full mx-auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        speed={600}
        dir="rtl"
        loop={true}
        modules={[Navigation, Pagination, Scrollbar]}
        navigation={{
          prevEl: ".swiper-prev-about-us",
          nextEl: ".swiper-next-about-us",
        }}
      >
        <SwiperSlide>
          <div
            style={{ direction: "ltr" }}
            className="mx-auto w-[100%] my-6 grid grid-cols-2 gap-8 
              screen900:w-full screen900:gap-6 screen770:grid-cols-1 screen770:w-[74%]
              screen650:w-full"
          >
            {one.map((item) => {
              return (
                <div key={item?.id}>
                  <Details item={item} />
                </div>
              );
            })}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            style={{ direction: "ltr" }}
            className="mx-auto w-[100%] my-6 grid grid-cols-2 gap-8 
              screen900:w-full screen900:gap-6 screen770:grid-cols-1 screen770:w-[74%]
              screen650:w-full"
          >
            {two.map((item) => {
              return (
                <div key={item?.id}>
                  <Details item={item} />
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperAboutUs;
