import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { useConfig } from "@/hooks/useConfig";

import phoneIcon from "@/public/images/phone-purple.svg";
import phoneIconDark from "@/public/images/phone-dark.svg";
import emailIcon from "@/public/images/email.svg";
import emailIconDark from "@/public/images/email-dark.svg";
import locationIcon from "@/public/images/location.svg";
import locationIconDark from "@/public/images/location-dark.svg";
import telegramIcon from "@/public/images/telegram.svg";
import telegramIconDark from "@/public/images/telegram-dark.svg";
import instaIcon from "@/public/images/instagram.svg";
import instaIconDark from "@/public/images/instagram-dark.svg";

import Button from "../shared/button/page";
import Styles from "./style.module.css";

type ConfigData = {
  instagram?: string;
  telegram?: string;
  address?: string;
  phone?: string;
  email?: string;
};

const FirstChild: React.FC<{ theme: string }> = ({ theme }) => {
  const { data, isLoading, error } = useConfig() as {
    data?: ConfigData;
    isLoading: boolean;
    error: unknown;
  };

  const instagram = data?.instagram;
  const telegram = data?.telegram;

  const contactDetails = useMemo(
    () => [
      {
        id: 1,
        icon: theme === "light" ? locationIcon : locationIconDark,
        title: "نشانی ما",
        text: data?.address,
      },
      {
        id: 2,
        icon: theme === "light" ? phoneIcon : phoneIconDark,
        title: "شماره تماس",
        text: data?.phone,
      },
      {
        id: 3,
        icon: theme === "light" ? emailIcon : emailIconDark,
        title: "آدرس ایمیل",
        text: data?.email,
      },
    ],
    [data, theme],
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;
  return (
    <section
      aria-labelledby="contact-section-title"
      className="pt-36 pb-24 w-[80%] mx-auto screen1120:w-[90%] screen900:pt-16 screen400:w-[95%]"
    >
      <form
        aria-labelledby="contact-form-title"
        className=" flex flex-row space-x-4 screen900:flex-col-reverse screen900:items-center screen900:space-x-0 "
      >
        <div
          className={`${Styles.cardBg} w-1/2 py-11 px-12 rounded-[8px] screen1120:px-6 screen900:w-[95%] screen900:mt-5`}
        >
          <h2
            id="contact-section-title"
            className="text-[24px] font-bold text-right mb-8 "
          >
            با ما در ارتباط باشید
          </h2>

          <div className="flex flex-row-reverse space-x-4 space-x-reverse screen900:flex-col screen900:space-x-0 screen900:space-y-4  ">
            <input
              className="border border-[#ACACAC] bg-transparent rounded-[5px] p-4 w-1/2 placeholder:text-[#ACACAC] outline-none screen900:w-full"
              placeholder="نام"
              dir="rtl"
            />
            <input
              className="border border-[#ACACAC] bg-transparent rounded-[5px] p-4 w-1/2 placeholder:text-[#ACACAC] outline-none screen900:w-full"
              placeholder="نام خانوادگی"
              dir="rtl"
            />
          </div>
          <div className="flex flex-row-reverse space-x-4 space-x-reverse my-5 screen900:flex-col screen900:space-x-0 screen900:space-y-4">
            <input
              className="border border-[#ACACAC] bg-transparent rounded-[5px] p-4 w-1/2 placeholder:text-[#ACACAC] outline-none screen900:w-full"
              placeholder="آدرس ایمیل"
              dir="rtl"
            />
            <input
              className="border border-[#ACACAC] bg-transparent rounded-[5px] p-4 w-1/2 placeholder:text-[#ACACAC] outline-none screen900:w-full"
              placeholder="شماره تماس"
              dir="rtl"
            />
          </div>

          <textarea
            rows={5}
            className="w-full border border-[#ACACAC] bg-transparent rounded-[5px] outline-none p-4 placeholder:text-[#ACACAC]"
            dir="rtl"
            placeholder="متن پیام"
          />

          <Button
            label="ارسال پیام"
            link=""
            cssStyle="p-4 w-44 ml-auto flex justify-center mt-4"
          />
        </div>
        <div
          className={`${
            Styles.cardBg
          } w-1/2 py-11 px-12 rounded-[5px] screen1120:px-6 screen900:w-[95%]`}
        >
          <h4 className="text-[24px] font-bold text-right mb-8 ">
            ملاقات با ما
          </h4>

          <div>
            {contactDetails?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-row-reverse space-x-5 space-x-reverse space-y-5"
                >
                  <div className="screen900:w-[50px] screen900:my-auto">
                    <div
                      className={`rounded-full w-12 h-12 my-auto flex justify-center items-center 
                        ${Styles.bgAccent}`}
                    >
                      <Image
                        src={item.icon}
                        width={22}
                        height={22}
                        alt={item.title}
                        className="mx-auto my-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-right mb-1">{item.title}</div>
                    <div
                      className={`text-right ml-auto mb-4
                        ${Styles.textMuted}
                        
                        ${
                          item.id === 1
                            ? " w-2/3 screen1450:w-[90%] screen1280:w-full"
                            : "w-full"
                        }`}
                    >
                      {item.text}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <h4 className="text-[24px] font-bold text-right mt-9 ">
            ما را دنبال کنید
          </h4>
          <div className="flex flex-row space-x-5 justify-end mt-3">
            <Link
              href={`https://www.instagram.com/${instagram}`}
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src={theme === "light" ? instaIcon : instaIconDark}
                width={32}
                height={32}
                alt="اینستاگرام"
              />
            </Link>
            <Link
              href={`https://t.me/${telegram}`}
              target="_blank"
              className="cursor-pointer"
            >
              <Image
                src={theme === "light" ? telegramIcon : telegramIconDark}
                width={32}
                height={32}
                alt="تلگرام"
              />
            </Link>
          </div>
        </div>
      </form>

      <section className="w-full mx-auto rounded-[10px] my-20 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10895.124152339939!2d51.41686913473069!3d35.72278044116122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e015d7687f169%3A0xcdcdef6676421595!2sTehran%20Province%2C%20Tehran%2C%20District%206%2C%20Fajr%20St!5e0!3m2!1sen!2s!4v1744548186902!5m2!1sen!2s"
          className="w-full h-[400px]"
          loading="lazy"
          title="ملاقات با ما"
          style={theme === "dark" ? { opacity: 0.57 } : { opacity: 1 }}
        ></iframe>
      </section>
    </section>
  );
};

export default FirstChild;
