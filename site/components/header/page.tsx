"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import NavLink from "@/components/shared/navLink/page";
import logo from "@/public/images/logo.svg";
import logoDark from "@/public/images/logo-dark.svg";
import insta from "@/public/images/instagram.svg";
import instaDark from "@/public/images/instagram-dark.svg";
import telegramIcon from "@/public/images/telegram.svg";
import telegramIconDark from "@/public/images/telegram-dark.svg";
import ThemeSwitcher from "../shared/themeSwitcher/page";
import HamburgerMenu from "./hamburger-menu";

const Header = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [instagram, setInstagram] = useState<string>("");
  const [telegram, setTelegram] = useState<string>("");

  useEffect(() => {
    const _data = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/getConfig`
      );

      switch (response.status) {
        case 200:
          const data = await response.json();
          setInstagram(data?.instagram);
          setTelegram(data?.telegram);

          break;

        default:
          break;
      }
    };
    _data();
  }, []);

  return (
    <div className="w-[80%] mx-auto flex flex-row justify-between py-8 screen900:w-[90%]">
      <Link href="/" className="flex flex-row my-auto ">
        <Image
          src={theme === "light" ? logo : logoDark}
          alt="لوگو صرافی ارغوان"
          width={52}
          height={52}
          className="my-auto screen1180:w-12 screen1180:h-12 screen1000:w-10 screen1000:h-10 screen400:w-8 screen400:h-8"
        />
        <div className="my-auto">
          <h2 className="screen1000:mt-1">
            <span
              className={`text-2xl leading-7 font-bold screen1180:text-xl screen1000:text-lg screen400:text-base ${
                theme === "light" ? "text-[#844DB4]" : "text-[#7A60FF]"
              }`}
            >
              ARGHAVAN
            </span>
            <span className="text-lg leading-7 font-bold screen1180:text-base screen1000:text-sm screen400:text-xs">
              Exchange
            </span>
          </h2>
          <h5 className="-mt-1 text-xs tracking-[0.24px] screen1180:text-[10px] screen1000:text-[8px] screen1000:-mt-2">
            With offical Authorization of I.R.I
          </h5>
        </div>
      </Link>
      <div className="flex flex-row">
        <div
          className="flex flex-row-reverse space-x-10 space-x-reverse justify-center items-center
          screen1420:space-x-5 screen1420:space-x-reverse 
          screen1180:space-x-1 screen1180:space-x-reverse
          screen900:hidden 
          "
        >
          <NavLink href="/">صفحه اصلی</NavLink>
          <NavLink href="/about-us">درباره ما</NavLink>
          <NavLink href="/contact-us">تماس با ما</NavLink>
          <NavLink href="/prices">نرخ ارز و سکه</NavLink>
        </div>
        <div className="flex flex-row space-x-5 my-auto screen1180:space-x-3 screen1000:space-x-2 screen400:space-x-0">
          <Link
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="my-auto screen900:hidden "
          >
            <Image
              src={theme === "light" ? insta : instaDark}
              alt="اینستاگرام"
              width={32}
              height={32}
              className="screen1000:w-7 screen1000:h-7 mx-auto my-auto"
            />
          </Link>

          <Link
            href={`https://t.me/${telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="my-auto screen900:hidden "
          >
            <Image
              src={theme === "light" ? telegramIcon : telegramIconDark}
              alt="تلگرام"
              width={32}
              height={32}
              className="screen1000:w-7 screen1000:h-7 mx-auto my-auto"
            />
          </Link>

          <ThemeSwitcher />
          <div className="screen900:grid hidden my-auto cursor-pointer">
            <HamburgerMenu instagram={instagram} telegram={telegram} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
