"use client";

import React from "react";
import Image from "next/image";

import { Hamrah } from "@/utils/fonts";

import ring from "@/public/images/1.png";
import ringDark from "@/public/images/1-dark.png";
import PriceImg from "@/public/images/img.png";

import phone from "@/public/images/phone.svg";
import Button from "@/components/shared/button/page";
import Transfer from "../transfer/page";
import Phone from "./phone";

const Banner: React.FC<{ theme: string }> = ({ theme }) => {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: "url('/images/bg-banner.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const backgroundStyleDark: React.CSSProperties = {
    backgroundImage: "url('/images/bg-banner-dark.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div
      style={theme === "light" ? backgroundStyle : backgroundStyleDark}
      className="pt-28 flex flex-col screen900:pt-14"
    >
      <div
        className="flex flex-row justify-center w-[75%] mx-auto screen1460:w-[80%] 
        screen900:flex-col-reverse screen1120:w-[90%]"
      >
        <section
          className="w-fit px-[15%] flex justify-end screen900:w-full screen900:pt-14 relative
          screen1645:px-[10%]
          screen1600:px-[12%]
          screen1460:px-[12%]
          screen900:px-0"
        >
          <Image
            src={theme === "light" ? ring : ringDark}
            alt="Ring"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 ml-2 -translate-y-1/2
              w-[600px] h-auto pointer-events-none z-10
              screen1230:w-[530px]
              screen900:w-[500px]
              screen770:w-[490px]
              screen650:hidden "
          />

          <div className="w-[350px] h-full mx-auto screen1230:w-[310px] screen900:w-[290px] relative">
            <Image
              src={PriceImg}
              alt="قیمت سکه"
              className="w-full h-full mx-auto"
            />
            <div
              className="absolute top-[54px] left-1 w-[270px] h-[596px] overflow-hidden inset-0 mx-auto rounded-3xl
              screen1230:w-[250px]
              screen1230:top-[42px]
              screen1230:h-[532px]
              screen900:w-[240px]
              screen900:h-[495px]
              screen360:w-[230px]
              screen360:h-[490px] "
            >
              <Phone theme={theme} />
            </div>
          </div>
        </section>

        <section className="w-1/2 flex flex-col items-end my-auto screen900:w-full screen900:items-center">
          <h1
            className={`text-[72px] leading-[70px] ${
              Hamrah.className
            } text-right
              screen1350:text-[62px] screen1120:text-[55px] screen500:text-[50px] whitespace-nowrap
              screen900:leading-[70px] screen400:text-[42px] screen400:text-center ${
                theme === "light" ? "text-[#844DB4]" : "text-[#7A60FF]"
              }`}
          >
            صــــــــرافــــــی ارغـــــــوان
          </h1>
          <h3
            className="text-[54px] font-bold leading-[70px] tracking-[1.08px] text-right whitespace-nowrap
            screen1350:text-[44px] screen1350:leading-[60px] screen1120:text-[37px] screen1120:leading-[50px]
            screen900:text-[34px] screen900:leading-[60px]
            screen400:text-[26px] screen400:leading-[40px]
            "
          >
            بهترین سایت نرخ خرید
          </h3>
          <h3
            className="text-[54px] font-bold leading-[70px] tracking-[1.08px] 
            screen1350:text-[44px] screen1350:leading-[60px] screen1120:text-[37px] screen1120:leading-[50px]
            screen900:text-[34px] screen900:leading-[60px]
            screen400:text-[26px] screen400:leading-[40px]
            "
          >
            و فروش ارز و سکه
          </h3>
          <div className="my-7 screen900:my-4">
            <h5
              className={`text-lg leading-8 screen1350:text-base screen1350:leading-8 screen400:text-center ${
                theme === "light" ? "text-[#7E7D7D]" : "text-[#fff]"
              }`}
            >
              با مجوز رسمی از بانک مرکزی جمهوری اسلامی ایران
            </h5>
            <div
              className={`text-right leading-7 flex flex-row items-end justify-end 
                screen900:flex-col screen900:items-center ${
                  theme === "light" ? "text-[#7E7D7D]" : "text-[#fff]"
                }`}
            >
              <div>
                <span
                  className={`"mr-2 screen900:mr-0  screen900:font-semibold
                    ${
                      theme === "light"
                        ? "screen900:text-[#844DB4]"
                        : "screen900:text-[#7A60FF]"
                    }
                    `}
                >
                  کـد صـرافـی :
                </span>
                <span>14506</span>
              </div>
              <div>
                <span
                  className={`screen900:font-semibold
                     ${
                       theme === "light"
                         ? "screen900:text-[#844DB4]"
                         : "screen900:text-[#7A60FF]"
                     }
                  `}
                >
                  شماره ثبت :
                </span>
                <span>432065</span>
              </div>
            </div>
          </div>
          <div className="">
            <Button
              icon={phone}
              label="تماس با ما"
              cssStyle="py-4 px-9"
              link="/contact-us"
            />
          </div>
        </section>
      </div>

      <Transfer theme={theme} />
    </div>
  );
};

export default Banner;
