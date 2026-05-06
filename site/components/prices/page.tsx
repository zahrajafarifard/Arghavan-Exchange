"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import Currency from "./currency/currency";
import Coin from "./coin/coin";
import styles from "../shared/style-clock.module.css";

const AnalogClock = dynamic(() => import("../shared/clock/page"), {
  ssr: false,
});

const Prices = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div className="pb-24 screen900:pb-10">
      <div
        className={`w-full ${styles.carousel} ${
          theme === "light" ? "bg-[#844DB4]" : "bg-[#7A60FF]"
        }`}
      >
        <div
          className={` flex flex-row justify-between ${styles.carouselTrack}`}
        >
          <div className={styles.carouselItem}>
            <AnalogClock timeZone="Asia/Dubai" size={80} city=" : دبی" />
          </div>

          <div className={styles.carouselItem}>
            <AnalogClock
              timeZone="Asia/Istanbul"
              size={80}
              city=" : استانبول"
            />
          </div>
          <div className={styles.carouselItem}>
            <AnalogClock
              timeZone="America/New_York"
              size={80}
              city=" : نیویورک"
            />
          </div>
          <div className={styles.carouselItem}>
            <AnalogClock timeZone="Asia/Tehran" size={80} city=" : تهران" />
          </div>
        </div>
      </div>

      <Currency theme={theme}/>
      <Coin theme={theme}/>
    </div>
  );
};

export default Prices;
