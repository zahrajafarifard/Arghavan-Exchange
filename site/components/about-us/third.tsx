import React from "react";

import Bars from "../shared/bars/page";

const Card = ({
  title,
  description,
  bgColor,
  textColor,
  text,
  borderColor,
}: {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  text: string;
  borderColor: string;
}) => (
  <div
    className={`${bgColor}  rounded-[4px] py-7 px-4 relative 
      screen1400:py-6 screen1400:px-3 screen1230:py-5 
      screen900:w-1/2 screen900:mx-auto screen900:py-7 screen900:px-4
      screen650:w-2/3 screen400:w-[80%]    `}
  >
    <p className="text-[22px] font-bold screen1230:text-[17px] screen900:text-[22px]">
      {title}
    </p>
    <p
      className={`${textColor} text-sm px-6 pt-2 screen1400:px-3 screen1230:text-[13px] screen1230:px-0 screen1230:pt-1
        screen900:text-sm screen900:pt-2 screen900:px-6`}
    >
      {description}
    </p>
    <div
      className={`${bgColor} w-8 h-8 -bottom-4 absolute rotate-45 inset-x-0 mx-auto screen1230:w-6 screen1230:h-6 screen1230:-bottom-3`}
    ></div>
    <div
      className={`h-24 absolute border-l-[2px] border-dashed border-[${borderColor}] inset-x-0 mx-auto w-fit -z-10 top-[100%] 
      screen1230:h-20`}
    >
      <div
        className={`${bgColor} border border-[${borderColor}] w-6 h-6 absolute -bottom-3 -right-3 rounded-full -rotate-45 inset-x-0 mx-auto 
          screen1230:w-5 screen1230:h-5 screen1230:-bottom-2 screen1230:-right-2.5`}
      ></div>
      <p className="hidden text-center mt-2 screen900:grid absolute whitespace-nowrap -bottom-12 left-1/2 -translate-x-1/2 mx-auto  text-[#7E7D7D] text-lg font-semibold ">
        {text}
      </p>
    </div>
  </div>
);

const Third: React.FC<{ theme: string }> = ({ theme }) => {
  return (
    <div className="w-[80%] mx-auto mt-24 mb-44">
      <div className="flex flex-row justify-center">
        <Bars />
        <span
          className={`text-[${
            theme === "light" ? "#844DB4" : "#7A60FF"
          }] text-lg leading-6 mx-1 my-auto`}
        >
          نقشه راه
        </span>
        <Bars reverse={true} />
      </div>

      <h1
        className="text-[40px] leading-[52px] text-center mt-3 mb-14 screen1280:text-[30px] screen1280:leading-[40px]  
        screen770:text-2xl screen770:leading-[35px] screen770:font-bold"
      >
        مسیری که برای بهبود و توسعه طی می‌کنیم
      </h1>

      <div
        style={{ direction: "rtl" }}
        className="grid grid-cols-5 gap-x-10  text-center screen1400:gap-x-3 screen900:grid-cols-1 screen900:gap-y-40"
      >
        <Card
          title="راه‌اندازی اولیه"
          description="تأسیس صرافی و دریافت مجوزهای رسمی"
          borderColor={theme === "light" ? "#7E7D7D" : "#E4E4E4"}
          bgColor={
            theme === "light"
              ? "bg-[#844DB4] text-white" //title color
              : "bg-[#7A60FF] text-white"
          }
          textColor={theme === "light" ? "text-[#F2F2F2]" : "text-[#E4E4E4]"} //description color
          text="Q1 - 2025"
        />
        <Card
          borderColor={theme === "light" ? "#7E7D7D" : "#E4E4E4"}
          title="گسترش خدمات"
          description="اضافه کردن امکان معامله مستقیم ارزهای خارجی"
          bgColor={
            theme === "light"
              ? "bg-[#EAD7E5] text-[#242424]"
              : "bg-[#1C1740] text-white"
          }
          textColor={theme === "light" ? "text-[#7E7D7D]" : "text-[#E4E4E4]"}
          text="Q2 - 2025"
        />
        <Card
          borderColor={theme === "light" ? "#7E7D7D" : "#E4E4E4"}
          title="معرفی ویژگی‌ها"
          description="اضافه شدن امکان خرید و فروش سکه‌های طلا آنلاین"
          bgColor={
            theme === "light"
              ? "bg-[#844DB4] text-white"
              : "bg-[#7A60FF] text-white"
          }
          textColor={theme === "light" ? "text-[#F2F2F2]" : "text-[#E4E4E4]"}
          text="Q3 - 2025"
        />
        <Card
          borderColor={theme === "light" ? "#7E7D7D" : "#E4E4E4"}
          title="تبدیل به یک پلتفرم"
          description="همکاری با بانک‌ها و موسسات مالی معتبر"
          bgColor={
            theme === "light"
              ? "bg-[#EAD7E5] text-[#242424]"
              : "bg-[#1C1740] text-white"
          }
          textColor={theme === "light" ? "text-[#7E7D7D]" : "text-[#E4E4E4]"}
          text="Q4 - 2025"
        />
        <Card
          borderColor={theme === "light" ? "#7E7D7D" : "#E4E4E4"}
          title="نوآوری و توسعه"
          description="راه‌اندازی مارکت‌پلیس سرمایه‌گذاری برای کاربران حرفه‌ای"
          bgColor={
            theme === "light"
              ? "bg-[#844DB4] text-white"
              : "bg-[#7A60FF] text-white"
          }
          textColor={theme === "light" ? "text-[#F2F2F2]" : "text-[#E4E4E4]"}
          text="Q5 - 2025"
        />
      </div>

      <div
        className={`h-auto w-full mt-24  relative -z-30 border-t-[2px] border-dashed 
        screen1230:mt-20 screen900:hidden ${
          theme === "light" ? "border-[#7E7D7D]" : "border-[#E4E4E4]"
        }`}
      ></div>

      <div
        style={{ direction: "rtl" }}
        className={`grid grid-cols-5 gap-x-10  text-center mt-4 text-lg font-semibold 
        screen1400:gap-x-3 screen1230:text-base screen900:hidden ${
          theme === "light" ? "text-[#7E7D7D]" : "text-[#E4E4E4]"
        }`}
      >
        <span>Q1 - 2025</span>
        <span>Q2 - 2025</span>
        <span>Q3 - 2025</span>
        <span>Q4 - 2025</span>
        <span>Q5 - 2025</span>
      </div>
    </div>
  );
};

export default Third;
