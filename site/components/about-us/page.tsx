"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import Header from "./header";
import FirstChild from "./first-child";
import SecondChild from "./second-child/page";
import Third from "./third";

const AboutUs = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div>
      <Header theme={theme} />
      <FirstChild theme={theme} />
      <SecondChild theme={theme}/>
      <Third theme={theme}/>
    </div>
  );
};

export default AboutUs;
