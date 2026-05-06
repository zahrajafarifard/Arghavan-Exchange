"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface PropsType {
  label: string;
  icon?: string;
  cssStyle: string;
  link: string;
}

const Button: React.FC<PropsType> = ({ label, icon, cssStyle, link }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const _button = (
    <div
      className={`${
        theme === "light" ? "bg-[#844DB4]" : "bg-[#7A60FF]"
      } rounded-[8px] flex flex-row-reverse my-auto ${cssStyle}`}
    >
      {icon ? (
        <Image src={icon} className="w-7 h-7 my-auto" alt={label} />
      ) : (
        <></>
      )}
      <span className="text-white text-lg mr-1 my-auto screen700:text-sm">
        {label}
      </span>
    </div>
  );
  return link ? <Link href={link}>{_button}</Link> : _button;
};

export default Button;
