import React from "react";
import Image from "next/image";

import bgImg from "@/public/images/Background.png";
import Symbol from "@/public/images/Symbol.svg";
import Styles from "./style.module.css";

const Header: React.FC = () => {
  return (
    <div className=" relative h-fit w-full py-36 ">
      <Image
        src={bgImg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className={Styles.opacityCls}
      />
      <div className="w-fit h-fit absolute mx-auto my-auto inset-0">
        <h2 className="text-white text-[40px] font-semibold">تماس با ما</h2>
        <div className="flex flex-row space-x-3 justify-center pt-4">
          <h3 className="text-white"> تماس با ما </h3>
          <Image src={Symbol} width={10} height={10} alt="" />
          <h3 className="text-white">صفحه اصلی</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
