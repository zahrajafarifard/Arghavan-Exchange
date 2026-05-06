"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import Chart from "@/components/shared/chart/page";
import emamiOld from "@/public/images/emami-old.svg";
import emami from "@/public/images/emami.svg";
import tamam from "@/public/images/tamam.png";

interface Coin {
  name: string;
}

interface FeaturedItem {
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

interface PropsType {
  item: FeaturedItem;
  percentChangeIn24Hours: PercentChange;
}

const CoinDetails: React.FC<PropsType> = ({ item, percentChangeIn24Hours }) => {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    const _fetchCurrencies = async () => {
      const _response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/getCoinPricesForChart`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: item.id }),
        }
      );

      if (_response.status === 200) {
        const _data = await _response.json();

        setData(_data?.data);
      }
    };

    if (item.id) _fetchCurrencies();
  }, [item.id]);

  const getFlagImage = () => {
    const CoinName = item.Coin.name;
    if (CoinName.includes("قدیم")) return emamiOld;
    if (CoinName.includes("امامی")) return emami;
    return tamam;
  };

  return (
    <div
      style={{ direction: "rtl" }}
      className={` rounded-[12px] w-[95%] mx-auto shadow-[0px_1px_2px_2px_rgba(1,1,1,0.06)] mb-2 p-3`}
    >
      <div className="border-b border-[#EDEDED] pb-2 grid grid-cols-3">
        <div
          style={{ direction: "rtl" }}
          className="flex items-center col-span-2"
        >
          <Image
            src={getFlagImage()}
            width={24}
            height={24}
            alt="سکه"
            className="ml-2"
          />
          <span className="font-bold text-xs text-[#171521]">
            {item?.Coin?.name}
          </span>
        </div>

        <div
          style={{ direction: "ltr" }}
          className={`col-span-1 text-center text-xs ${
            percentChangeIn24Hours?.percentChangeIn24Hours >= 0
              ? "text-[#58BD7D]"
              : "text-[#D33535]"
          } my-auto`}
        >
          {percentChangeIn24Hours?.percentChangeIn24Hours !== 0 &&
          !isNaN(percentChangeIn24Hours?.percentChangeIn24Hours)
            ? percentChangeIn24Hours?.percentChangeIn24Hours
            : "_"}
        </div>
      </div>

      <div className="py-1 border-b border-[#EDEDED] grid grid-cols-3">
        <span className="text-xs text-right text-[#7E7D7D]">ارزش خرید</span>
        <span className="text-xs text-right text-[#7E7D7D]">ارزش فروش</span>
        <span className="text-xs text-center text-[#7E7D7D]">7 روز گذشته</span>
      </div>
      <div className="py-1  grid grid-cols-3 text-[#171521]">
        <div className="text-right text-xs font-bold my-auto">
          {item?.buyPrice?.toLocaleString()}
        </div>

        <div className="text-right text-xs font-bold my-auto text-[#171521]">
          {item?.sellPrice?.toLocaleString()}
        </div>
        <div className="mx-auto my-auto w-full overflow-hidden">
          <Chart items={data} />
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
