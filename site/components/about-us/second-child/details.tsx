import React from "react";
import Image from "next/image";

import styles from "../style.module.css";
interface ItemType {
  item: {
    id: number;
    icon: string;
    title: string;
    text: string;
  };
}

const Details: React.FC<ItemType> = ({ item }) => {
  return (
    <article
      aria-labelledby={`card-title-${item.id}`}
      className={` rounded-[8px] w-full py-5 px-4 ${styles.cardBg}`}
    >
      <div className={`w-fit p-3 rounded-full ml-auto ${styles.iconBg}`}>
        <Image
          src={item.icon}
          alt=""
          aria-hidden="true"
          className="w-10 h-10 "
        />
      </div>

      <h3
        id={`card-title-${item.id}`}
        className={`border-t border-b my-7 py-1 text-xl text-right leading-8 screen1280:text-lg ${styles.borderTheme}`}
      >
        {item.title}
      </h3>
      <p
        dir="rtl"
        className={`text-[#7E7D7D] text-right leading-7 mb-7 screen1280:text-sm  
        ${styles.textMuted}
        ${item.id === 2 ? "screen1400:tracking-tight" : " "}`}
      >
        {item.text}
      </p>
      <div
        aria-hidden="true"
        className={`w-full rounded-[6px] h-3 ${styles.accentText}`}
      ></div>
    </article>
  );
};

export default Details;
