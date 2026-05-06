"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import Chart from "@/components/shared/chart/page";
import us from "@/public/images/united states.svg";
import eur from "@/public/images/eur.svg";
import ca from "@/public/images/canada.svg";
import aud from "@/public/images/australia.svg";
import uk from "@/public/images/united kingdom.svg";
import sek from "@/public/images/sweden.svg";
import nok from "@/public/images/norway.svg";
import dkk from "@/public/images/denmark.svg";
import tr from "@/public/images/turkey.svg";
import chf from "@/public/images/switzerland.svg";
import jp from "@/public/images/japan.svg";
import myr from "@/public/images/malaysia.svg";
import ch from "@/public/images/china.svg";
import iqd from "@/public/images/iraq.svg";
import az from "@/public/images/azerbaijan.svg";
import ua from "@/public/images/united arab emirates.svg";

interface Currency {
  name: string;
}

interface FeaturedItem {
  id: number;
  Currency: Currency;
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

const CurrencyDetails: React.FC<PropsType> = ({
  item,
  percentChangeIn24Hours,
}) => {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    const _fetchCurrencies = async () => {
      const _response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/getCurrencyPricesForChart`,
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
    const currencyName = item.Currency.name;
    if (currencyName.includes("آمریکا")) return us;
    if (currencyName.includes("کانادا")) return ca;
    if (currencyName.includes("یورو")) return eur;
    if (currencyName.includes("دانمارک")) return dkk;
    if (currencyName.includes("استرالیا")) return aud;
    if (currencyName.includes("پوند")) return uk;
    if (currencyName.includes("امارات")) return ua;
    if (currencyName.includes("نروژ")) return nok;
    if (currencyName.includes("ترکیه")) return tr;
    if (currencyName.includes("ژاپن")) return jp;
    if (currencyName.includes("منات")) return az;
    if (currencyName.includes("عراق")) return iqd;
    if (currencyName.includes("مالزی")) return myr;
    if (currencyName.includes("سوییس")) return chf;
    if (currencyName.includes("سوئد")) return sek;
    if (currencyName.includes("چین")) return ch;
    return us;
  };

  return (
    <div
      style={{ direction: "rtl" }}
      className={`rounded-[12px] w-[95%] mx-auto shadow-[0px_1px_2px_2px_rgba(1,1,1,0.06)] mb-2 p-3`}
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
            {item?.Currency?.name}
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
        <span className={`text-xs text-right text-[#7E7D7D]`}>ارزش خرید</span>
        <span className={`text-xs text-right text-[#7E7D7D] `}>ارزش فروش</span>
        <span className={`text-xs text-center text-[#7E7D7D] `}>
          7 روز گذشته
        </span>
      </div>
      <div className="py-1  grid grid-cols-3 ">
        <div className="text-right text-xs font-bold my-auto text-[#171521]">
          {item?.buyPrice?.toLocaleString()}
        </div>

        <div className="text-right text-xs font-bold my-auto text-[#171521] ">
          {item?.sellPrice?.toLocaleString()}
        </div>
        <div className="mx-auto my-auto w-full overflow-hidden">
          <Chart items={data} />
        </div>
      </div>
    </div>
  );
};

export default CurrencyDetails;
