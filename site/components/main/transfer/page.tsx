"use client";
import React from "react";
import Image from "next/image";

import paypal from "@/public/images/paypal.svg";
import western from "@/public/images/western.svg";
import swift from "@/public/images/swift.svg";

const Transfer: React.FC<{ theme: string }> = ({ theme }) => {
  const backgroundStyleDark: React.CSSProperties = {
    backgroundImage: "url('/images/bg-banner2-dark.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div
      style={theme === "light" ? { opacity: 0.6 } : backgroundStyleDark}
      className={`w-[80%] mx-auto flex justify-between mt-16 py-20 px-14  backdrop-blur-[2px] rounded-[15px] 
        screen900:w-full screen900:rounded-none screen900:py-16 screen900:px-0 
        screen650:py-14 screen500:py-12
        ${theme === "light" ? "bg-[#E4E4E4]" : "bg-transparent"}
      `}
    >
      <Image
        src={swift}
        width={160}
        height={50}
        alt="swift"
        className="screen1120:w-28 my-auto mx-auto screen650:w-24 screen500:w-20 screen400:w-16"
      />
      <Image
        src={paypal}
        width={180}
        height={50}
        alt="paypal"
        className="screen1120:w-32 my-auto mx-auto screen650:w-28 screen500:w-24 screen400:w-20"
      />
      <Image
        src={western}
        width={170}
        height={42}
        alt="western union"
        className="screen1120:w-28 my-auto mx-auto screen650:w-24 screen500:w-20 screen400:w-16"
      />
      <Image
        src={paypal}
        width={180}
        height={50}
        alt="paypal"
        className="screen1120:w-32 my-auto mx-auto screen650:w-28 screen500:w-24 screen400:w-20"
      />
    </div>
  );
};

export default Transfer;
