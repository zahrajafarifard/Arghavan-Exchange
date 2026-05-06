"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import gifDark from "@/public/images/GIF-darkmode.gif";
import gifLight from "@/public/images/GIF-lightmode.gif";
import arrowR from "@/public/images/right.svg";
import arrowL from "@/public/images/left.svg";
import search from "@/public/images/search.svg";
import SwiperCurrency from "./currency/swiper-currency";
import SwiperCoin from "./coin/swiper-coin";
import Button from "@/components/shared/button/page";

interface CurrencyItemType {
  id: number;
  Currency: { name: string; symbol: string };
  buyPrice: number;
  pBuyPrice: number;
  sellPrice: number;
  pSellPrice: number;
}
interface CoinItemType {
  id: number;
  Coin: { name: string };
  buyPrice: number;
  pBuyPrice: number;
  sellPrice: number;
  pSellPrice: number;
}

const Price: React.FC<{ theme: string }> = ({ theme }) => {
  const [searchItem, setSearchItem] = useState<string>("");
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const [responseStatus, setResponseStatus] = useState<number>(0);

  const [currs, setCurrs] = useState<CurrencyItemType[]>([]);
  const [coins, setCoins] = useState<CoinItemType[]>([]);

  const searchHandler = async (value?: string) => {
    setResponseStatus(0);
    const query = value ?? searchItem;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/search`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ searchItem: query, mode: "top" }),
        }
      );

      switch (response.status) {
        case 200:
          const data = await response.json();
          setCurrs(data?.currencies?.length > 0 ? data.currencies : []);
          setCoins(data?.coins?.length > 0 ? data.coins : []);
          if (data?.coins?.length > 0) {
            setResponseStatus(405);
          }
          if (data?.currencies?.length > 0) {
            setResponseStatus(406);
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
  }, [searchItem]);

  return (
    <div className="py-24 w-[80%] mx-auto screen900:w-[90%] ">
      <p className="font-bold text-[40px] text-right pt-3 pb-12">
        قیمت های به روز
      </p>

      <div className="w-full mx-auto flex flex-row justify-between">
        <div
          className="flex flex-row-reverse space-x-5 space-x-reverse w-[40%] justify-end
          screen1280:w-1/2 screen1120:w-[65%] screen900:w-[60%] screen700:space-x-2 screen700:space-x-reverse"
        >
          <div
            className={`rounded-md py-[10px] px-5 flex flex-row-reverse w-2/3  screen700:hidden ${
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
              className="w-full bg-transparent outline-none"
              value={searchItem}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchItem(e.target.value)
              }
            />
          </div>

          <div className="relative hidden screen700:flex">
            <div
              onClick={() => setShowSearchInput(!showSearchInput)}
              className={`
              ${theme === "light" ? "bg-[#fff]" : "bg-[#1C1740]"} 
              rounded-md py-[10px] px-3 flex-row-reverse w-fit flex`}
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
                absolute top-12 right-0 w-[184px] p-2 rounded-md screen400:w-[168px] screen360:w-[158px]`}
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

          <Button
            label="مشاهده نرخ‌ها"
            icon=""
            cssStyle="py-4 w-40 flex justify-center items-center screen700:py-3 screen700:w-32 screen400:w-28"
            link="/prices"
          />
        </div>
        <div className="flex flex-row-reverse space-x-2 space-x-reverse screen400:space-x-1 screen400:space-x-reverse">
          <div
            className={`swiper-next py-2 px-9 rounded-[8px] my-auto 
            screen700:px-4 screen700:py-1 screen400:px-3 screen400:py-0.5 ${
              theme === "light" ? "bg-[#844DB4]" : "bg-[#1C1740]"
            }`}
          >
            <Image src={arrowR} width={24} height={24} alt="بعدی" />
          </div>
          <div
            className={`swiper-prev py-2 px-9 rounded-[8px] my-auto 
            screen700:px-4 screen700:py-1 screen400:px-3 screen400:py-0.5 ${
              theme === "light" ? "bg-[#844DB4]" : "bg-[#1C1740]"
            }`}
          >
            <Image src={arrowL} width={24} height={24} alt="قبلی" />
          </div>
        </div>
      </div>

      {responseStatus === 404 ? (
        <div className="w-full mx-auto my-20 flex flex-col justify-center items-center">
          <Image
            src={theme === "light" ? gifLight : gifDark}
            alt="404"
            width={100}
            height={100}
            className="screen650:w-20 screen650:h-20"
          />
          <div
            style={{ direction: "rtl" }}
            className={`text-center text-lg ${
              theme === "light" ? "text-[#7E7D7D]" : "text-[#ACACAC]"
            }`}
          >
            موردی یافت نشد!
          </div>
        </div>
      ) : (
        <div className="pt-14">
          <SwiperCurrency
            items={currs}
            theme={theme}
            responseStatus={responseStatus}
          />
          <SwiperCoin
            items={coins}
            theme={theme}
            responseStatus={responseStatus}
          />
        </div>
      )}
    </div>
  );
};

export default Price;
