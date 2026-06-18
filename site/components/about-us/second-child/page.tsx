import React from "react";
import Image from "next/image";

import arrowR from "@/public/images/right.svg";
import arrowL from "@/public/images/left.svg";
import SecondChildCmp from "./second-child";
import Icon1 from "@/public/images/client 1.svg";
import Icon1Dark from "@/public/images/client 1 (1).svg";
import Icon2 from "@/public/images/vision 1.svg";
import Icon2Dark from "@/public/images/vision 1 (1).svg";
import Icon3 from "@/public/images/deal 2.svg";
import Icon3Dark from "@/public/images/deal 2 (1).svg";
import Icon4 from "@/public/images/medal 1.svg";
import Icon4Dark from "@/public/images/medal 1 (1).svg";

import Bars from "@/components/shared/bars/page";
import SwiperAboutUs from "./swiper";
import styles from "../style.module.css";

const SecondChild: React.FC<{ theme: string }> = ({ theme }) => {
  const items: { id: number; icon: string; title: string; text: string }[] = [
    {
      id: 1,
      icon: theme === "light" ? Icon4 : Icon4Dark,
      title: "خدمات یکپارچه و حرفه‌ای",
      text: "رویکرد ما بر صداقت، مسئولیت‌پذیری و منافع مشتریان در تمام مراحل خدمات است.",
    },
    {
      id: 2,
      icon: theme === "light" ? Icon3 : Icon3Dark,
      title: "پایبندی به اصول اخلاقی",
      text: "رویکرد ما بر صداقت، مسئولیت‌پذیری و حفظ منافع مشتریان در تمام مراحل خدمات است.",
    },
    {
      id: 3,
      icon: theme === "light" ? Icon2 : Icon2Dark,
      title: "شفافیت در نرخ‌گذاری",
      text: "قیمت‌ها به‌صورت لحظه‌ای و شفاف منتشر می‌شوند تا تصمیم‌گیری شما با اطمینان باشد.",
    },
    {
      id: 4,
      icon: theme === "light" ? Icon1 : Icon1Dark,
      title: " تجربه و تخصص",
      text: "سال‌ها تجربه حرفه ای در بازار ارز و طلا، تضمینی برای ارائه خدمات مطمئن است.",
    },
  ];
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(180deg, #F6F6F6 -2.91%, rgba(255, 255, 255, 0) 49.35%, #F6F6F6 102.66%), url('/images/bg-main.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const darkStyle: React.CSSProperties = {
    backgroundImage: ` url('/images/bg-main-dark.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <section
      aria-labelledby="features-title"
      style={theme === "light" ? backgroundStyle : darkStyle}
      className="pt-24 pb-16 flex flex-col "
    >
      <div className="w-[80%] mx-auto screen900:w-[90%]">
        <div className="flex flex-row-reverse justify-between mb-16">
          <div className="flex flex-col">
            <div className="flex flex-row justify-end pt-1 pb-3">
              <Bars aria-hidden="true" />

              <span
                className={`text-lg ${styles.accentText} ml-1 screen1120:text-base`}
              >
                صرافی ارغوان
              </span>
            </div>

            <h2
              id="features-title"
              dir="rtl"
              className="text-[40px] font-bold text-right screen1430:text-[30px] screen1120:text-2xl screen500:text-[21px] "
            >
              ویژگی‌های منحصربه‌فرد ما
            </h2>
          </div>

          <div
            role="group"
            aria-label="اسلایدر ویژگی‌ها"
            className="flex-row-reverse space-x-2 space-x-reverse screen400:space-x-1 screen400:space-x-reverse hidden screen1120:flex"
          >
            <button
              type="button"
              aria-label="اسلاید بعدی"
              className={`swiper-next-about-us py-1 px-6 rounded-[8px] mt-auto 
              screen700:px-4 screen700:py-1 screen400:px-3 screen400:py-0.5 ${
                styles.bgAccent
              }`}
            >
              <Image
                src={arrowR}
                width={24}
                height={24}
                alt=""
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              aria-label="اسلاید قبلی"
              className={`swiper-prev-about-us py-1 px-6 rounded-[8px] mt-auto
              screen700:px-4 screen700:py-1 screen400:px-3 screen400:py-0.5 ${
                styles.bgAccent
              }`}
            >
              <Image
                src={arrowL}
                width={24}
                height={24}
                alt=""
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
        <div className="screen1120:hidden">
          <SecondChildCmp items={items} />
        </div>
        <div className="hidden screen1120:block w-full">
          <SwiperAboutUs items={items} />
        </div>
      </div>
    </section>
  );
};

export default SecondChild;
