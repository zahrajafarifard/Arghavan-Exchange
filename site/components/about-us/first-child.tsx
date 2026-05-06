import React from "react";
import Image from "next/image";

import Img from "@/public/images/about-img1.png";
import ImgDark from "@/public/images/about-img1-dark.png";
import Img2 from "@/public/images/icon3.svg";
import Img2Dark from "@/public/images/icon3-1.svg";
import Img2_2 from "@/public/images/badge 1.svg";
import Img2_2Dark from "@/public/images/badge 2.svg";
import Img3 from "@/public/images/telegram-white.svg";
import Img3Dark from "@/public/images/telegram-white-dark.svg";
import Bars from "../shared/bars/page";
import Button from "../shared/button/page";

const FirstChild: React.FC<{ theme: string }> = ({ theme }) => {
  return (
    <div
      className="pt-36 pb-24 w-[80%] mx-auto flex flex-row space-x-10 
        screen1120:space-x-6 screen950:flex-col screen950:w-[90%] screen950:pt-16 screen950:space-x-0"
    >
      <div className="w-1/2 pl-[9%] screen1600:pl-[5%] screen1350:pl-[2%] screen1230:pl-0 screen950:w-full">
        <div className="flex flex-row justify-end pt-1 pb-3">
          <Bars />
          <span
            className={`text-lg ${
              theme === "light" ? "text-[#844DB4]" : "text-[#7A60FF]"
            } ml-1`}
          >
            درباره صرافی
          </span>
        </div>

        <h1
          style={{ direction: "rtl" }}
          className="text-[40px] font-bold text-right screen1230:text-[30px]"
        >
          با اطمینان معامله کنید!
        </h1>
        <p
          style={{ direction: "rtl" }}
          className={`text-justify ml-auto leading-7 my-6 screen1230:text-sm ${
            theme === "light" ? "text-[#7E7D7D]" : "text-[#E4E4E4]"
          }`}
        >
          صرافی ارغوان با سال‌ها تجربه در ارائه خدمات مالی، نرخ لحظه‌ای خرید و
          فروش ارزهای خارجی و سکه‌های طلا را در اختیار شما قرار می‌دهد. هدف ما
          فراهم کردن یک محیط امن، شفاف و سریع برای معاملات ارزی و
          سرمایه‌گذاری‌های شماست.
        </p>

        <div
          className="flex flex-row justify-between space-x-12 pb-11 screen1230:space-x-6 
          screen950:flex-col screen950:w-full screen950:space-x-0"
        >
          <div className="w-1/2 screen950:w-full screen950:mb-4">
            <div
              className={`rounded-full w-fit p-3 ml-auto ${
                theme === "light" ? "bg-[#E6D7EA]" : "bg-[#7a60ff40]"
              }`}
            >
              <Image
                src={theme === "light" ? Img2_2 : Img2_2Dark}
                width={40}
                height={40}
                alt=""
                className="screen1230:w-8 screen1230:h-8 mx-auto my-auto"
              />
            </div>

            <h2
              style={{ direction: "rtl" }}
              className="text-2xl font-bold text-right pt-6 pb-4 whitespace-nowrap 
              screen1230:text-xl screen1230:whitespace-normal 
              screen1120:text-lg"
            >
              خدمات ویژه مشتریان
            </h2>

            <p
              style={{ direction: "rtl" }}
              className={`text-justify ml-auto leading-7 screen1230:text-sm ${
                theme === "light" ? "text-[#7E7D7D]" : "text-[#E4E4E4]"
              }`}
            >
              تیم پشتیبانی ما به‌صورت ۲۴/۷ آماده ارائه مشاوره و راهنمایی در مورد
              خرید، فروش در بازارهای ارزی و طلا است.
            </p>
          </div>
          <div className="w-1/2 screen950:w-full">
            <div
              className={`rounded-full w-fit p-3 ml-auto ${
                theme === "light" ? "bg-[#E6D7EA]" : "bg-[#7a60ff40]"
              }`}
            >
              <Image
                src={theme === "light" ? Img2 : Img2Dark}
                width={40}
                height={40}
                alt=""
                className="screen1230:w-8 screen1230:h-8 mx-auto my-auto"
              />
            </div>

            <h2
              style={{ direction: "rtl" }}
              className="text-2xl font-bold text-right pt-6 pb-4 whitespace-nowrap 
              screen1230:text-xl screen1230:whitespace-normal
              screen1120:text-lg
              "
            >
              تحلیل بازار و نرخ لحظه‌ای
            </h2>

            <p
              style={{ direction: "rtl" }}
              className={`text-justify ml-auto leading-7 screen1230:text-sm ${
                theme === "light" ? "text-[#7E7D7D]" : "text-[#E4E4E4]"
              }`}
            >
              با استفاده از داده‌های به‌روز و تحلیل‌های دقیق بازار، نرخ لحظه‌ای
              ارزهای خارجی و سکه‌های ایرانی را دریافت کنید.
            </p>
          </div>
        </div>
        <Button
          link=""
          cssStyle="w-1/2 ml-auto py-4 flex flex-row space-x-1 space-x-reverse justify-center mt-5 
          screen1230:w-[63%] screen950:w-fit screen950:px-10 screen400:px-6"
          icon={theme === "light" ? Img3 : Img3Dark}
          label="همین حالا به ما بپیوندید"
        />
      </div>
      <div className="w-1/2 my-auto screen950:w-full screen950:mx-auto screen950:mt-10">
        <Image
          src={theme === "light" ? Img : ImgDark}
          className="w-fit  mx-auto my-auto screen950:w-[80%]"
          alt="با اطمینان معامله کنید"
        />
      </div>
    </div>
  );
};

export default FirstChild;
