"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import arrowR from "@/public/images/right.svg";
import arrowL from "@/public/images/left.svg";
import search from "@/public/images/search.svg";
import SwiperCurrency from "./swiper-currency";

interface CurrencyItemType {
  id: number;
  Currency: { name: string; symbol: string };
  buyPrice: number;
  pBuyPrice: number;
  sellPrice: number;
  pSellPrice: number;
}

const Currency: React.FC<{ theme: string }> = ({ theme }) => {
  const [searchItem, setSearchItem] = useState<string>("");
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const [currs, setCurrs] = useState<CurrencyItemType[]>([]);
  const [responseStatus, setResponseStatus] = useState<number>(0);

  const searchHandler = async (value?: string) => {
    setResponseStatus(0);
    const query = value ?? searchItem;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/search`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ searchItem: query, mode: "all" }),
        }
      );

      switch (response.status) {
        case 200:
          const data = await response.json();
          setCurrs(data?.currencies?.length > 0 ? data.currencies : []);

          if (data?.currencies?.length === 0) {
            setResponseStatus(404);
          }

          break;
        case 404:
          setResponseStatus(404);
          break;

        default:
          break;
      }
    } catch (error) {
      console.error("Search request failed:", error);
    } finally {
      if (!value && !showSearchInput) setSearchItem("");
    }
  };

  useEffect(() => {
    if (showSearchInput) searchHandler();
  }, [setCurrs, searchItem]);

  return (
    <div className="w-[80%] mx-auto pt-24 screen900:w-[90%] screen900:pt-10">
      <div className="flex flex-row-reverse justify-between">
        <p
          className="text-[40px] text-right font-bold w-[30%] my-auto 
          screen1230:text-[30px] screen950:text-[28px] screen900:text-[20px] screen700:w-[50%] screen400:w-[60%] screen400:text-[18px] "
        >
          قیمت های به روز ارز
        </p>

        <div className="w-[70%] mr-auto flex flex-row justify-between">
          <div className="flex flex-row-reverse space-x-5 space-x-reverse w-full justify-end screen700:space-x-2 screen700:space-x-reverse">
            <div
              className={`rounded-md py-[10px] px-5 flex flex-row-reverse w-1/3
              screen1280:w-1/2
              screen900:hidden ${
                theme === "light" ? "bg-[#fff]" : "bg-[#1C1740]"
              }`}
            >
              <Image
                src={search}
                width={24}
                height={24}
                alt="جست و جو"
                className="ml-3"
                onClick={() => searchHandler()}
              />
              <input
                dir="rtl"
                placeholder="جست و جو"
                className="outline-none w-full bg-transparent"
                value={searchItem}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchItem(e.target.value)
                }
              />
            </div>
            <div className="relative hidden screen900:flex">
              <div
                onClick={() => setShowSearchInput(!showSearchInput)}
                className={`
                  ${theme === "light" ? "bg-[#fff]" : "bg-[#1C1740]"}
                  rounded-md py-[10px] px-4  flex-row-reverse w-fit flex  screen700:px-3 `}
              >
                <Image
                  src={search}
                  width={24}
                  height={24}
                  alt="جست و جو"
                  className=""
                  onClick={() => searchHandler()}
                />
              </div>
              {showSearchInput ? (
                <div
                  className={`
                  ${theme === "light" ? "bg-[#fff]" : "bg-[#1C1740]"} 
                  absolute top-12 right-0 w-[276px] screen700:w-44 p-2 rounded-md screen400:w-40 screen360:w-36`}
                >
                  <input
                    dir="rtl"
                    placeholder="جست و جو"
                    className="outline-none w-full bg-transparent text-sm"
                    value={searchItem}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setSearchItem(e.target.value)
                    }
                  />
                </div>
              ) : null}
            </div>

            <div className="flex flex-row-reverse space-x-2 space-x-reverse screen700:space-x-1 screen700:space-x-reverse">
              <div
                onClick={() => {
                  if (searchItem) {
                    setSearchItem("");
                    searchHandler();
                  } else {
                    searchHandler();
                  }
                }}
                className={`swiper-next-curr py-4 px-9 ${
                  theme === "light" ? "bg-[#844DB4]" : "bg-[#1C1740]"
                }  rounded-[8px] cursor-pointer screen1280:py-2 mx-auto my-auto
                screen700:px-4 screen700:py-1 screen400:px-3 screen400:py-0.5`}
              >
                <Image src={arrowR} width={24} height={24} alt="بعدی" />
              </div>
              <div
                onClick={() => {
                  if (searchItem) {
                    setSearchItem("");
                    searchHandler();
                  } else {
                    searchHandler();
                  }
                }}
                className={`swiper-prev-curr py-4 px-9 ${
                  theme === "light" ? "bg-[#844DB4]" : "bg-[#1C1740]"
                }  rounded-[8px] cursor-pointer screen1280:py-2  mx-auto my-auto
                screen700:px-4 screen700:py-1 screen400:px-3 screen400:py-0.5`}
              >
                <Image src={arrowL} width={24} height={24} alt="قبلی" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-14 screen900:pt-8">
        <SwiperCurrency propsItems={currs} responseStatus={responseStatus} theme={theme}/>
      </div>
    </div>
  );
};

export default Currency;
