"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import Header from "./header";
import FirstChild from "./first-child";

const ContactUs = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div>
      <Header theme={theme} />
      <FirstChild theme={theme} />
    </div>
  );
};

export default ContactUs;
