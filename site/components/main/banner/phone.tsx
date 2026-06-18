"use client";
import React, { useState } from "react";

import CoinDetails from "./phone-coin-details";
import CurrencyDetails from "./phone-currency-details";
import { useFeaturedCoins } from "@/hooks/useCoin";
import { useFeaturedCurrencies } from "@/hooks/useCurrency";
import { useSocketQuery } from "@/hooks/useSocketQuery";

interface Coin {
  name: string;
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

interface FeaturedCoinsResponse {
  coins: FeaturedCoinItem[];
  percentChangeIn24Hours: PercentChange[];
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

interface FeaturedCurrenciesResponse {
  currs: FeaturedCurrencyItem[];
  percentChangeIn24Hours: PercentChange[];
}

const Phone: React.FC<{ theme: string }> = ({ theme }) => {
  const [showItems, setShowItems] = useState<"coin" | "currency">("coin");

  const { data, error, isLoading } = useFeaturedCoins();

  const coins = data?.coins ?? [];
  const percentChangeIn24Hours = data?.percentChangeIn24Hours ?? [];

  const {
    data: CurrData,
    error: hasErr,
    isLoading: IsLoading,
  } = useFeaturedCurrencies();
  const currs = CurrData?.currs ?? [];
  const percentChangeIn24Hours2 = CurrData?.percentChangeIn24Hours ?? [];

  useSocketQuery<FeaturedCoinsResponse>({
    eventName: "getFeaturedCoins",
    queryKey: ["featuredCoins"],
    updater: (old, coins) => {
      if (!old) {
        return {
          coins,
          percentChangeIn24Hours: [],
        };
      }

      return {
        ...old,
        coins,
      };
    },
  });

  useSocketQuery<FeaturedCurrenciesResponse>({
    eventName: "getFeaturedCurrencies",
    queryKey: ["featuredCurrencies"],
    updater: (old, currs) => {
      if (!old) {
        return {
          currs,
          percentChangeIn24Hours: [],
        };
      }

      return {
        ...old,
        currs,
      };
    },
  });

  if (isLoading || IsLoading) return <div>Loading...</div>;

  if (error || hasErr) return <div>Error</div>;

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
        : currs?.map((currency, index) => {
            return (
              <CurrencyDetails
                key={currency?.id}
                item={currency}
                percentChangeIn24Hours={percentChangeIn24Hours2[index]}
              />
            );
          })}
    </div>
  );
};

export default Phone;
