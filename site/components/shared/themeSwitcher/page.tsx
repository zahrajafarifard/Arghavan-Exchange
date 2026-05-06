"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "@/store/slices/theme";
import { RootState } from "@/store/store";

import sunIcon from "@/public/images/sun.svg";
import moonIcon from "@/public/images/moon.svg";

export default function ThemeSwitcher() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };

  return (
    <div
      onClick={() => toggleTheme()}
      className={`w-[72px] h-8 flex items-center rounded-full p-1 duration-300 screen400:w-[65px] ${
        theme === "light" ? "bg-[#FFCD62]" : "bg-[#7998ff]"
      }`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform duration-300 screen400:w-[22px] screen400:h-[22px] ${
          theme === "light"
            ? "translate-x-10 screen400:translate-x-[35px]"
            : "translate-x-0 "
        }`}
      />

      {theme === "light" ? (
        <span className="transform duration-0 -translate-x-6">
          <Image src={sunIcon} width={26} height={26} alt="light mode" />
        </span>
      ) : (
        <span className="transform duration-0 translate-x-4 screen400:translate-x-3">
          <Image src={moonIcon} width={26} height={26} alt="dark mode" />
        </span>
      )}
    </div>
  );
}
