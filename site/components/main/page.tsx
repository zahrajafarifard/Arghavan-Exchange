"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import Banner from "./banner/page";
import Price from "./price/page";
import AboutUs from "./about-us/page";

const AnalogClock = dynamic(() => import("../shared/clock/page"), {
  ssr: false,
});
import styles from "../shared/style-clock.module.css";

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div>
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

      <Banner theme={theme} />
      <Price theme={theme} />
      <AboutUs theme={theme} />
    </div>
  );
}

export default App;
