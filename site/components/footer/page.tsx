"use client";

import Image from "next/image";
import Link from "next/link";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import { useConfig } from "@/hooks/useConfig";
import logo from "@/public/images/logo-white.svg";
import logoDark from "@/public/images/logo-dark.svg";
import insta from "@/public/images/instagram-white.svg";
import instaDark from "@/public/images/instagram-white-dark.svg";
import telegramIcon from "@/public/images/telegram-white.svg";
import telegramDark from "@/public/images/telegram-white-dark.svg";
import phoneIcon from "@/public/images/phone-purple.svg";

type ConfigData = {
  instagram?: string;
  telegram?: string;
  address?: string;
  phone?: string;
  email?: string;
  workHours?: string;
};

const Footer = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const { data, isLoading, error } = useConfig() as {
    data?: ConfigData;
    isLoading: boolean;
    error: unknown;
  };

  const instagram = data?.instagram;
  const telegram = data?.telegram;
  const address = data?.address;
  const phone = data?.phone;
  const email = data?.email;
  const workHour = data?.workHours;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <>
      <div
        className={`border-b border-[#E5E5E5] ${
          theme === "light" ? "bg-[#844DB4]" : "bg-[#171521]"
        } text-white
        `}
      >
        <div
          style={{ direction: "rtl" }}
          className="w-[90%] mx-auto grid grid-cols-4 py-24 
          screen900:grid-cols-1 screen900:items-center screen900:justify-center screen900:py-14"
        >
          <Image
            src={theme === "light" ? logo : logoDark}
            className="mx-auto screen1000:w-[120px] screen1000:h-[86px]"
            width={130}
            height={96}
            alt="لوگو صرافی ارغوان"
          />
          <div className="-mr-2 screen1230:-mr-4 screen900:mr-0 screen900:text-center screen900:py-9">
            <h3 className="text-2xl font-bold leading-8 mb-8 screen1000:text-xl screen900:text-2xl">
              با ما در ارتباط باشید
            </h3>
            <h4
              style={{ direction: "ltr" }}
              className="text-right screen1000:text-sm screen900:text-center screen900:text-base"
            >
              {phone}
            </h4>
            <h4 className="capitalize my-3 screen1000:text-sm screen900:text-base">
              {email}
            </h4>
            <h4 className="screen1120:pl-8 screen1000:text-sm screen900:text-base screen900:text-center screen900:pl-0">
              {workHour}
            </h4>
          </div>

          <div className="screen900:text-center">
            <h3 className="text-2xl font-bold leading-8 mb-8 screen1000:text-xl screen900:mb-4 screen900:text-2xl">
              آدرس ما
            </h3>
            <h4 className="w-[80%] screen1000:text-sm screen1000:w-[90%] screen900:mx-auto screen900:mb-4 screen900:text-base">
              {address}
            </h4>
            <Link href="/contact-us">
              <div
                className={`rounded-[8px] flex flex-row justify-center py-4 w-44 mt-4 
                screen1000:py-3 screen1000:w-40 screen900:mx-auto
                screen900:w-44 screen900:py-4 ${
                  theme === "light" ? "bg-white" : "bg-[#7A60FF]"
                }`}
              >
                <Image
                  src={phoneIcon}
                  width={28}
                  height={28}
                  alt="تلفن"
                  className={`${
                    theme === "light" ? "" : "brightness-0 invert"
                  }`}
                />
                <div
                  className={`mr-1 text-lg my-auto ${
                    theme === "light" ? "text-[#844DB4]" : "text-white"
                  }`}
                >
                  تماس با ما
                </div>
              </div>
            </Link>
          </div>
          <div className="mx-auto screen900:py-9">
            <h3 className="text-2xl font-bold leading-8 mb-8 screen1000:text-xl screen900:text-2xl">
              شبکه های اجتماعی
            </h3>
            <div className="flex flex-row space-x-5 space-x-reverse screen900:mx-auto screen900:justify-center">
              <Link
                href={`https://t.me/${telegram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={theme === "light" ? telegramIcon : telegramDark}
                  width={34}
                  height={34}
                  alt="تلگرام صرافی ارغوان"
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
              <Link
                href={`https://www.instagram.com/${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={theme === "light" ? insta : instaDark}
                  width={34}
                  height={34}
                  alt="اینستاگرام صرافی ارغوان"
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ direction: "rtl" }}
        className={`text-white text-center py-4 screen900:px-10 screen900:text-sm screen900:leading-6 screen500:px-5 ${
          theme === "light" ? "bg-[#844DB4]" : "bg-[#171521]"
        }`}
      >
        کلیه حقوق مادی و معنوی این سایت متعلق به صرافی ارغوان می‌باشد و کپی از
        آن پیگرد قانونی دارد.
        <span className="screen900:block screen900:text-sm screen900:leading-6">
          طراحی شده توسط شرکت
          <Link href="https://telmis.ir" className="cursor-pointer">
            <span className="underline font-semibold underline-offset-4">
               تلمیس
            </span>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Footer;
