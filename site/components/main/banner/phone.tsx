"use client";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

import CoinDetails from "./phone-coin-details";
import CurrencyDetails from "./phone-currency-details";

interface Coin {
  name: string;
}

interface Currency {
  name: string;
}

interface FeaturedCurrencyItem {
  id: number;
  Currency: Currency;
  buyPrice: number;
  pBuyPrice: number;
  sellPrice: number;
  pSellPrice: number;
}
interface FeaturedCoinItem {
  id: number;
  Coin: Coin;
  buyPrice: number;
  pBuyPrice: number;
  sellPrice: number;
  pSellPrice: number;
}

interface PercentChange {
  percentChangeIn24Hours: number;
}

const Phone: React.FC<{ theme: string }> = ({ theme }) => {
  const [showItems, setShowItems] = useState<"coin" | "currency">("coin");
  const [coins, setCoins] = useState<FeaturedCoinItem[]>([]);
  const [currencies, setCurrencies] = useState<FeaturedCurrencyItem[]>([]);
  const [percentChangeIn24Hours, setPercentChangeIn24Hours] = useState<
    PercentChange[]
  >([]);

  useEffect(() => {
    const _fetchCurrs = async () => {
      const _response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/featuredCoins`
      );

      switch (_response.status) {
        case 200:
          const _data = await _response.json();
          setCoins(_data?.coins);
          setPercentChangeIn24Hours(_data?.percentChangeIn24Hours);
          break;

        default:
          break;
      }
    };

    _fetchCurrs();

    const socket = io(`${process.env.NEXT_PUBLIC_API_URL}`, {
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      socket.on("getFeaturedCoins", (data) => {
        setCoins(data);
      });
    });
  }, []);

  useEffect(() => {
    const _fetchCurrs = async () => {
      const _response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/featuredCurrencies`
      );

      switch (_response.status) {
        case 200:
          const _data = await _response.json();

          setCurrencies(_data?.currs);
          setPercentChangeIn24Hours(_data?.percentChangeIn24Hours);
          break;

        default:
          break;
      }
    };

    _fetchCurrs();

    const socket = io(`${process.env.NEXT_PUBLIC_API_URL}`, {
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      socket.on("getFeaturedCurrencies", (data) => {
        setCurrencies(data);
      });
    });
  }, []);

  return (
    <div className="bg-white h-full w-full">
      <div
        className={`flex flex-row-reverse space-x-2 space-x-reverse text-[10px]  mr-[12px] my-2  `}
      >
        <span
          onClick={() => setShowItems("coin")}
          className={`px-4 py-1 rounded-[4px] cursor-pointer ${
            showItems === "coin"
              ? `  ${
                  theme === "light" ? "bg-[#844DB4]" : "bg-[#7A60FF]"
                }  text-white`
              : "text-[#7E7D7D]"
          }`}
        >
          قیمت روز سکه
        </span>
        <span
          onClick={() => setShowItems("currency")}
          className={`px-4 py-1 rounded-[4px] cursor-pointer ${
            showItems === "currency"
              ? `  ${
                  theme === "light" ? "bg-[#844DB4]" : "bg-[#7A60FF]"
                }  text-white`
              : "text-[#7E7D7D]"
          }`}
        >
          قیمت روز ارز
        </span>
      </div>
      {showItems === "coin"
        ? coins?.map((coin, index) => {
            return (
              <CoinDetails
                key={coin?.id}
                item={coin}
                percentChangeIn24Hours={percentChangeIn24Hours[index]}
              
              />
            );
          })
        : currencies?.map((currency, index) => {
            return (
              <CurrencyDetails
                key={currency?.id}
                item={currency}
                percentChangeIn24Hours={percentChangeIn24Hours[index]}
                
              />
            );
          })}
    </div>
  );
};

export default Phone;
