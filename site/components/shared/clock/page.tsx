"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

import "./style.css";

type Props = {
  timeZone: string;
  city: string;
  size?: number;
};

const AnalogClock: React.FC<Props> = ({ timeZone, city, size = 100 }) => {
  const [time, setTime] = useState<Date | null>(null);
  const [digitalTime, setDigitalTime] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateClock = () => {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        };

        const formattedTime = new Intl.DateTimeFormat("en-US", options).format(
          now
        );
        setDigitalTime(formattedTime);

        const [hours, minutes] = formattedTime.split(":").map(Number);
        const localDate = new Date();
        localDate.setHours(hours, minutes);

        setTime(localDate);
      };

      updateClock();
      const interval = setInterval(updateClock, 1000);
      return () => clearInterval(interval);
    }
  }, [timeZone]);

  if (!time) return null;

  return (
    <div
      className="border-4 border-white flex flex-row justify-between rounded-full p-4 w-[450px] mx-auto "
      style={{
        transform: `scale(${size / 200})`,
        marginBottom: "-30px",
        marginTop: "-30px",
        marginLeft: "-150px",
        marginRight: "-150px",
      }}
    >
      <Clock value={time} renderNumbers={true} />

      <div className="my-auto flex flex-row mx-auto space-x-3">
        <div className="text-[35px] text-white">{digitalTime}</div>
        <div className="text-[35px] text-white">{city}</div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(AnalogClock), { ssr: false });
