"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import Chart from "@/components/shared/chart/page";
import Chart2 from "@/components/shared/chart/full-details-chart";
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
import close from "@/public/images/x.svg";
import { useCurrencyPrices } from "@/hooks/useCurrency";

interface FeaturedItemsType {
  Currency: { name: string; symbol?: string };
  id: number;
  buyPrice: number;
  pBuyPrice: number;
  sellPrice: number;
  pSellPrice: number;
}

interface PropsType {
  item: FeaturedItemsType;
  percentChangeIn24Hours: { percentChangeIn24Hours: number };
}

const DetailsSmallScreen: React.FC<PropsType> = ({
  item,
  percentChangeIn24Hours,
}) => {
  const [showChart, setShowChart] = useState<boolean>(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    const modal = document.getElementById("modal");
    if (modal) setModalRoot(modal);
  }, []);

  const { data, error, isLoading } = useCurrencyPrices(item?.id);

  
  const chartData = data?.data;

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

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;
  return (
    <div
      className={` ${
        theme === "light" ? "bg-white" : "bg-[#1C1740]"
      }  rounded-[12px] w-full shadow-[0px_1px_30px_8px_rgba(1,1,1,0.045)] p-5`}
    >
      <div className="border-b border-[#EDEDED] pb-5 grid grid-cols-4">
        <div
          style={{ direction: "rtl" }}
          className="flex items-center col-span-3"
        >
          <Image
            src={getFlagImage()}
            width={24}
            height={24}
            alt="پرچم"
            className="ml-2"
            style={{ width: "auto", height: "auto" }}
          />
          <span className="font-bold text-lg ">{item?.Currency?.name}</span>
          <span className="mx-3 text-[#7E7D7D]">|</span>
          <span
            className={`text-sm my-auto font-bold ${
              theme === "light" ? "text-[#7E7D7D]" : "text-[#fff]"
            }`}
          >
            {item?.Currency?.symbol}
          </span>
        </div>

        <div
          style={{ direction: "ltr" }}
          className={`col-span-1 text-center ${
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

      <div className="py-1.5 border-b border-[#EDEDED] grid grid-cols-3">
        <span
          className={`text-xs text-right ${
            theme === "light" ? "text-[#7E7D7D]" : "text-[#fff]"
          }`}
        >
          ارزش خرید
        </span>
        <span
          className={`text-xs text-right ${
            theme === "light" ? "text-[#7E7D7D]" : "text-[#fff]"
          }`}
        >
          ارزش فروش
        </span>
        <span
          className={`text-xs text-center ${
            theme === "light" ? "text-[#7E7D7D]" : "text-[#fff]"
          }`}
        >
          7 روز گذشته
        </span>
      </div>
      <div className="py-4  grid grid-cols-3 ">
        <div className="text-right text-base font-bold my-auto">
          {item?.buyPrice?.toLocaleString()}
        </div>

        <div className="text-right text-base font-bold my-auto">
          {item?.sellPrice?.toLocaleString()}
        </div>
        <div className="mx-auto my-auto w-full overflow-hidden">
          <Chart items={chartData} />
        </div>
      </div>
      <div
        onClick={() => setShowChart(true)}
        className={`rounded-[6px] py-2 w-full text-center cursor-pointer ${
          theme === "light"
            ? "bg-[#E6D7EA] text-[#844DB4]"
            : "bg-[#7A60FF] text-[#fff]"
        }`}
      >
        مشاهده نمودار
      </div>

      {showChart && modalRoot
        ? ReactDOM.createPortal(
            <>
              <div
                onClick={() => setShowChart(false)}
                className={`fixed top-0 left-0 h-screen w-screen  z-10 backdrop-blur-[2px]
                  ${theme === "light" ? "bg-[#1F1F1FB3] " : "bg-[#FFFFFF4D]"}
                  `}
              />
              <div
                className={`rounded-lg shadow-lg w-[55%] h-fit fixed mx-auto my-auto inset-x-0 inset-y-0 z-40 screen1230:w-[65%] screen1000:w-[90%] screen770:w-[95%] ${
                  theme === "light" ? "bg-[#fff]" : "bg-[#020415]"
                }`}
              >
                <div
                  className={`rounded-t-lg ${
                    theme === "light" ? "bg-[#844DB4]" : "bg-[#7A60FF]"
                  } py-4 px-6`}
                >
                  <div
                    className="flex flex-row-reverse space-x-16 space-x-reverse 
                    screen1180:space-x-12 screen770:space-x-8 screen650:space-x-6 screen500:space-x-4"
                  >
                    <Image
                      onClick={() => setShowChart(false)}
                      src={close}
                      width={32}
                      height={32}
                      alt="بستن"
                      className="cursor-pointer ml-4"
                    />
                    <div className="text-white text-right ">
                      <p className="text-xl screen1180:text-lg screen770:text-base screen650:text-sm">
                        قیمت خرید
                      </p>
                      <p className="text-lg mt-1 screen1180:text-base screen770:text-sm screen650:text-xs">
                        {item?.buyPrice?.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-white text-right">
                      <p className="text-xl screen1180:text-lg screen770:text-base screen650:text-sm">
                        قیمت فروش
                      </p>
                      <p className="text-lg mt-1 screen1180:text-base screen770:text-sm screen650:text-xs">
                        {item?.sellPrice?.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-white text-right">
                      <p className="text-xl screen1180:text-lg screen770:text-base screen650:text-sm">
                        تغییر
                      </p>
                      <p className="text-lg mt-1 text-center screen1180:text-base screen770:text-sm screen650:text-xs">
                        {percentChangeIn24Hours?.percentChangeIn24Hours !== 0 &&
                        !isNaN(percentChangeIn24Hours?.percentChangeIn24Hours)
                          ? percentChangeIn24Hours?.percentChangeIn24Hours
                          : "_"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mx-auto flex justify-center items-center">
                  <Chart2 items={chartData} />
                </div>
              </div>
            </>,

            modalRoot,
          )
        : null}
    </div>
  );
};

export default DetailsSmallScreen;
