import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface ItemType {
  item: {
    id: number;
    icon: string;
    title: string;
    text: string;
  };
}

const Details: React.FC<ItemType> = ({ item }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div
      key={item.id}
      className={` rounded-[8px] w-full py-5 px-4 ${
        theme === "light" ? "bg-[#fff]" : "bg-[#1C1740]"
      }`}
    >
      <div
        className={`w-fit p-3 rounded-full ml-auto ${
          theme === "light" ? "bg-[#E6D7EA]" : "bg-[#7A60FF] bg-opacity-25"
        }`}
      >
        <Image src={item.icon} alt={item.title} className="w-10 h-10 " />
      </div>

      <p
        className={`border-t border-b my-7 py-1 text-xl text-right leading-8 screen1280:text-lg
        ${theme === "light" ? "border-[#f2f2f2]" : "border-[#7E7D7D]"}
      
      `}
      >
        {item.title}
      </p>
      <p
        style={{ direction: "rtl" }}
        className={`text-[#7E7D7D] text-right leading-7 mb-7 screen1280:text-sm  
        ${theme === "light" ? "text-[#7E7D7D]" : "text-[#E4E4E4]"}
        ${
          item.id === 2 ? "screen1400:tracking-tight" : " "
        }`}
      >
        {item.text}
      </p>
      <div
        className={`w-full rounded-[6px] h-3 ${
          theme === "light" ? "bg-[#844DB4]" : "bg-[#7A60FF]"
        }`}
      ></div>
    </div>
  );
};

export default Details;
