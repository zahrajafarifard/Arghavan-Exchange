import React from "react";
import Image from "next/image";
import Link from "next/link";

import bgImg from "@/public/images/Background.png";
import Symbol from "@/public/images/Symbol.svg";
import styles from "./style.module.css";

const Header: React.FC = () => {
  return (
    <header
      aria-labelledby="about-heading"
      className="relative h-fit w-full py-36 "
    >
      <Image
        src={bgImg}
        fill
        priority
        quality={100}
        aria-hidden="true"
        alt=""
        className={styles.headerBg}
      />
      <div className="w-fit h-fit absolute mx-auto my-auto inset-0">
        <h1 id="about-heading" className="text-white text-[40px] font-semibold">
          درباره صرافی ارغوان
        </h1>
        <nav aria-label="Breadcrumb" className="pt-4">
          <ol className="flex flex-row-reverse items-center justify-center gap-3 text-white">
            <li>
              <Link href="/" className="hover:opacity-80">
                صفحه اصلی
              </Link>
            </li>

            <li aria-hidden="true">
              <Image src={Symbol} width={10} height={10} alt="" />
            </li>

            <li aria-current="page">درباره ما</li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;
