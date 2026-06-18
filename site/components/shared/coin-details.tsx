"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import Chart2 from "@/components/shared/chart/full-details-chart";
import Chart from "@/components/shared/chart/page";
import emamiOld from "@/public/images/emami-old.svg";
import emami from "@/public/images/emami.svg";
import tamam from "@/public/images/tamam.png";
import close from "@/public/images/x.svg";
import { useCoinPrices } from "@/hooks/useCoin";

interface FeaturedItemsType {
  Coin: { name: string };
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
  const theme = useSelector((state: RootState) => state.theme.theme);

  // const [data, setData] = useState<[]>([]);
  const [showChart, setShowChart] = useState<boolean>(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const modal = document.getElementById("modal");
    if (modal) setModalRoot(modal);
  }, []);

  const { data, isLoading, error } = useCoinPrices(item.id);

  const chartData = data?.data;

  const getFlagImage = () => {
    const CoinName = item.Coin.name;
    if (CoinName.includes("قدیم")) return emamiOld;
    if (CoinName.includes("امامی")) return emami;
    return tamam;
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  return (
    <div
      className={` ${
        theme === "light" ? "bg-white" : "bg-[#1C1740]"
      } rounded-[12px] w-full shadow-[0px_1px_30px_8px_rgba(1,1,1,0.045)] p-5`}
    >
      <div className="border-b border-[#EDEDED] pb-5 grid grid-cols-3">
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
          <span className="font-bold text-lg">{item?.Coin?.name}</span>
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
                className={`${
                  theme === "light" ? "bg-[#fff]" : "bg-[#020415]"
                }  rounded-lg shadow-lg w-[55%] h-fit fixed mx-auto my-auto inset-x-0 inset-y-0 z-40 screen1230:w-[65%] screen1000:w-[90%] screen770:w-[95%]`}
              >
                <div
                  className={`rounded-t-lg ${
                    theme === "light" ? "bg-[#844DB4]" : "bg-[#7A60FF]"
                  } py-4 px-6`}
                >
                  <div
                    className="flex flex-row-reverse space-x-16 space-x-reverse
                    screen1180:space-x-12 screen770:space-x-8 screen650:space-x-6 screen500:space-x-4 "
                  >
                    <Image
                      onClick={() => setShowChart(false)}
                      src={close}
                      width={32}
                      height={32}
                      alt="بستن"
                      className="cursor-pointer ml-4"
                    />
                    <div className="text-white text-right">
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
                        تغییر{" "}
                      </p>
                      <p className="text-lg mt-1 screen1180:text-base screen770:text-sm screen650:text-xs">
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
