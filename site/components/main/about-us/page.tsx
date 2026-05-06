"use client";
import React from "react";
import Image from "next/image";

import Bars from "@/components/shared/bars/page";
import icon1 from "@/public/images/icon4.svg";
import icon2 from "@/public/images/icon2.svg";
import icon3 from "@/public/images/icon3.svg";

const items: { id: number; icon: string; title: string; text: string }[] = [
  {
    id: 1,
    icon: icon1,
    title: "دسترسی همیشگی",
    text: "از طریق وب‌سایت صرافی ارغوان، در هر زمان و از هر مکان به نرخ‌ها، تحلیل‌ها و خدمات ما دسترسی خواهید داشت.",
  },
  {
    id: 2,
    icon: icon2,
    title: " تحلیل تخصصی",
    text: "با بهره‌گیری از داده‌های معتبر و تیم تحلیل حرفه‌ای، نگاهی دقیق و علمی به روند قیمت ارز و طلا ارائه می‌دهیم.",
  },
  {
    id: 3,
    icon: icon3,
    title: "بروزرسانی لحظه‌ای",
    text: "داده‌های ما از منابع معتبر جهانی استخراج شده و به‌صورت آنی بروزرسانی می‌شود تا به جدیدترین نرخ‌ها دسترسی داشته باشید.",
  },
];

const AboutUs: React.FC<{ theme: string }> = ({ theme }) => {
  return (
    <div className="pt-24 pb-44">
      <div className="w-[80%] mx-auto screen1120:w-[90%] ">
        <div className="flex flex-row justify-center">
          <Bars />
          <span
            className={`text-lg text-center mx-2 -mt-1 screen770:text-base screen770:-mt-0.5 ${
              theme === "light" ? "text-[#844DB4]" : "text-[#7A60FF]"
            }`}
          >
            صرافی ارغوان
          </span>
          <Bars reverse={true} />
        </div>

        <h3 className="text-center text-[40px] font-bold pt-3 pb-14 screen1000:text-[30px] screen770:text-2xl">
          چرا ما را انتخاب کنید؟
        </h3>

        <div className="flex flex-row justify-between items-center screen1120:flex-wrap-reverse screen1120:gap-y-4 ">
          {items?.map((item) => {
            return (
              <div
                key={item.id}
                className={`py-8 w-[32%] mx-auto flex flex-col items-center justify-center rounded-lg screen1120:w-[48%] 
                screen900:w-[75%] screen770:w-[85%] screen650:w-[95%] ${
                  theme === "light" ? "bg-[#E6D7EA]" : "bg-[#1C1740] "
                }`}
              >
                <div
                  className={`rounded-full py-5 px-6 w-fit screen1120:py-3 screen1120:px-3 ${
                    theme === "light"
                      ? "bg-[#F4EEF2]"
                      : "bg-[#7A60FF] bg-opacity-25"
                  }`}
                >
                  <Image
                    src={item.icon}
                    width={40}
                    height={40}
                    alt={item.title}
                    className={`screen1120:w-8 screen1120:h-8 mx-auto my-auto ${
                      theme === "light" ? "" : "brightness-0 invert"
                    }`}
                  />
                </div>
                <span
                  className={`py-4 font-semibold text-xl ${
                    theme === "light" ? "text-[#66269D]" : "text-[#fff]"
                  }`}
                >
                  {item.title}
                </span>
                <p
                  style={{ direction: "rtl" }}
                  className={`text-center leading-7 w-[68%] screen1450:w-[85%] screen1180:w-[90%] screen650:w-[75%] 
                  screen500:w-[76%]  
                  
                  ${theme === "light" ? "text-[#844DB4]" : "text-[#fff]"}
                  ${item.id === 3 ? "screen400:w-[93%]" : "screen400:w-[90%]"}`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
