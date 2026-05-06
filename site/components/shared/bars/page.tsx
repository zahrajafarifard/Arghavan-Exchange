"use client";
import React from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

interface BarsProps {
  reverse?: boolean;
}

const Bars: React.FC<BarsProps> = ({ reverse = false }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div
      style={{ direction: "rtl" }}
      className={`flex gap-1 ${reverse ? "flex-row-reverse" : ""}`}
    >
      <span
        className={`font-bold ${
          theme === "light" ? "bg-[#844db4ad]" : "bg-[#7a60ffbe]"
        } w-1 h-5`}
      ></span>
      <span
        className={`font-bold ${
          theme === "light" ? "bg-[#844db4cb]" : "bg-[#7a60ffdc]"
        } w-1 h-5`}
      ></span>
      <span
        className={`font-bold ${
          theme === "light" ? "bg-[#844db4]" : "bg-[#7A60FF]"
        } w-1 h-5`}
      ></span>
      <span
        className={`font-bold ${
          theme === "light" ? "bg-[#603883]" : "bg-[#604cc7]"
        } w-1 h-5`}
      ></span>
      <span
        className={`font-bold ${
          theme === "light" ? "bg-[#3d2453]" : "bg-[#45378f]"
        } w-1 h-5`}
      ></span>
      <span
        className={`font-bold ${
          theme === "light" ? "bg-[#2d1a3d]" : "bg-[#483a92d2]"
        } w-1 h-5`}
      ></span>
      <span
        className={`font-bold ${
          theme === "light" ? "bg-[#1f132b]" : "bg-[#3d3269c7]"
        } w-1 h-5`}
      ></span>
      <span
        className={`font-bold ${
          theme === "light" ? "bg-[#0a060e]" : "bg-[#2e274ee0]"
        } w-1 h-5`}
      ></span>
    </div>
  );
};

export default Bars;
