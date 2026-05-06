"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "@/components/shared/navLink/page";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import menu from "@/public/images/menu.svg";
import menuDark from "@/public/images/menu-dark.svg";
import logo from "@/public/images/logo.svg";
import logoDark from "@/public/images/logo-dark.svg";
import closeDark from "@/public/images/x.svg";
import closeLight from "@/public/images/Close.svg";
import telegramIcon from "@/public/images/telegram.svg";
import telegramIconDark from "@/public/images/telegram-dark.svg";
import instaIcon from "@/public/images/instagram.svg";
import instaIconDark from "@/public/images/instagram-dark.svg";

const Sidebar: React.FC<{ instagram: string; telegram: string }> = ({
  instagram,
  telegram,
}) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="">
      {!isMenuOpen ? (
        <Image
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}
          src={theme === "light" ? menu : menuDark}
          alt="menu"
          width={32}
          height={32}
          className="my-auto"
        />
      ) : (
        <div
          className="w-full h-full bg-[#4c4c4c]   opacity-60 fixed top-0 left-0 z-30 "
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`top-0  w-[100%]  text-center h-screen fixed z-40 
          
          ${theme === "light" ? "bg-white" : "bg-[#171521]"}
          ${
            isMenuOpen
              ? "transition duration-1000 ease-in-out translate-x-0 right-0"
              : "transition duration-1000 ease-in-out translate-x-full right-0"
          }`}
      >
        <div className=" flex pt-4 flex-row justify-between  w-[90%] mx-auto">
          <div
            className="flex text-[12px] cursor-pointer "
            onClick={() => {
              setIsMenuOpen((prev) => !prev);
            }}
          >
            <Image
              src={theme === "light" ? closeLight : closeDark}
              alt="بستن"
              width={26}
              height={26}
              className={theme === "light" ? "w-14 h-14" : closeDark}
            />
          </div>

          <div className="flex flex-row my-auto">
            <Image
              src={theme === "light" ? logo : logoDark}
              alt="لوگو صرافی ارغوان"
              width={44}
              height={44}
              className="my-auto screen360:w-10 screen360:h-10 "
            />
            <div className="my-auto">
              <h2 className="">
                <span
                  className={`text-2xl leading-7 font-bold screen360:text-xl ${
                    theme === "light" ? "text-[#844DB4]" : "text-[#7A60FF]"
                  }`}
                >
                  ARGHAVAN
                </span>
                <span className="text-lg leading-7 font-bold screen360:text-base">
                  Exchange
                </span>
              </h2>
              <h5 className="-mt-1 text-xs tracking-[0.24px]">
                With offical Authorization of I.R.I
              </h5>
            </div>
          </div>
        </div>

        <ul
          style={{ direction: "rtl" }}
          className="flex flex-col place-items-start text-lg  duration-700   tracking-tighter  pt-6 justify-between "
        >
          <li
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className={`py-3 px-6   w-full ${
              theme === "light" ? "hover:bg-[#E6D7EA]" : "hover:bg-[#7A60FF40]"
            }`}
          >
            <NavLink href="/">خانه</NavLink>
          </li>

          <li
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className={`py-3 my-3 px-6 w-full ${
              theme === "light" ? "hover:bg-[#E6D7EA]" : "hover:bg-[#7A60FF40]"
            }`}
          >
            <NavLink href="/about-us">درباره ما</NavLink>
          </li>
          <li
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className={`py-3 px-6 w-full ${
              theme === "light" ? "hover:bg-[#E6D7EA]" : "hover:bg-[#7A60FF40]"
            }`}
          >
            <NavLink href="/contact-us">تماس با ما</NavLink>
          </li>

          <li
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className={`py-3 mt-3 px-6 w-full ${
              theme === "light" ? "hover:bg-[#E6D7EA]" : "hover:bg-[#7A60FF40]"
            }`}
          >
            <NavLink href="/prices"> نرخ ارز و سکه </NavLink>
          </li>
        </ul>
        <div className="flex flex-row space-x-6 mr-auto w-[100%] mx-auto fixed bottom-6 pl-6 pt-4 border-t">
          <div className="flex flex-row space-x-5 justify-end mt-3">
            <Link
              href={`https://www.instagram.com/${instagram}`}
              target="_blank"
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
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
      </div>
    </div>
  );
};

export default Sidebar;
