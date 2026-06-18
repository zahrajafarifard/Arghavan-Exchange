"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { io } from "socket.io-client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";
import Details from "../../shared/currency-details";
import gifDark from "@/public/images/GIF-darkmode.gif";
import gifLight from "@/public/images/GIF-lightmode.gif";
import CircularProgress from "@mui/material/CircularProgress";

interface FeaturedItemsType {
  id: number;
  Currency: { name: string; symbol: string };
  buyPrice: number;
  pBuyPrice: number;
  sellPrice: number;
  pSellPrice: number;
}

interface SwiperCurrencyProps {
  propsItems: FeaturedItemsType[];
  responseStatus: number;
  theme: string;
}
const SwiperCurrency: React.FC<SwiperCurrencyProps> = ({
  propsItems,
  responseStatus,
  theme,
}) => {
  const [items, setItems] = useState<FeaturedItemsType[]>([]);
  const [percentChangeIn24Hours, setPercentChangeIn24Hours] = useState<[]>([]);

  useEffect(() => {
    setItems(propsItems);
  }, [propsItems]);

  useEffect(() => {
    const _fetchCurrs = async () => {
      const _response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/getallcurrencies`,
      );

      switch (_response.status) {
        case 200:
          const _data = await _response.json();
          setItems(_data?.currs);
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
      socket.on("getCurrencies", (data) => {
        setItems(data);
      });
    });
  }, []);

  const one = items?.slice(0, 6);
  const two = items?.slice(6, 12);
  const three = items?.slice(12, 18);

  const _one = items?.slice(0, 3);
  const _two = items?.slice(3, 6);
  const _three = items?.slice(6, 9);
  const _four = items?.slice(9, 12);
  const _five = items?.slice(12, 15);
  const _six = items?.slice(15, 18);

  if (items?.length === 0 && responseStatus !== 404) {
    return (
      <div className="w-full mx-auto my-20 flex flex-col justify-center items-center screen700:my-10">
        <CircularProgress
          sx={{
            color: `${theme === "light" ? "#844A74" : "#7A60FF"}`,
          }}
          className="purple-progress"
          size={45}
        />
      </div>
    );
  }

  return (
    <div>
      {responseStatus === 0 ? (
        <>
          <div className="w-[100%] mx-auto screen700:hidden">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              speed={600}
              dir="rtl"
              loop={true}
              modules={[Navigation, Pagination, Scrollbar]}
              navigation={{
                prevEl: ".swiper-prev-curr",
                nextEl: ".swiper-next-curr",
              }}
            >
              <SwiperSlide>
                <div className="mx-auto w-[100%] my-6  grid grid-cols-3 gap-4 screen1180:grid-cols-2 ">
                  {one.map((currency, index: number) => {
                    return (
                      <Details
                        key={currency?.id}
                        item={currency}
                        percentChangeIn24Hours={percentChangeIn24Hours[index]}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mx-auto w-[100%] my-6  grid grid-cols-3 gap-4 screen1180:grid-cols-2 ">
                  {two.map((currency, index: number) => {
                    return (
                      <Details
                        key={currency?.id}
                        item={currency}
                        percentChangeIn24Hours={percentChangeIn24Hours[index]}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mx-auto w-[100%] my-6  grid grid-cols-3 gap-4 screen1180:grid-cols-2 ">
                  {three.map((currency, index: number) => {
                    return (
                      <Details
                        key={currency?.id}
                        item={currency}
                        percentChangeIn24Hours={percentChangeIn24Hours[index]}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="hidden screen700:block w-[100%] mx-auto">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              speed={600}
              dir="rtl"
              loop={true}
              modules={[Navigation, Pagination, Scrollbar]}
              navigation={{
                prevEl: ".swiper-prev-curr",
                nextEl: ".swiper-next-curr",
              }}
            >
              <SwiperSlide>
                <div className="mx-auto w-[100%] my-6  grid grid-cols-1 gap-4 ">
                  {_one.map((currency, index: number) => {
                    return (
                      <Details
                        key={currency?.id}
                        item={currency}
                        percentChangeIn24Hours={percentChangeIn24Hours[index]}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mx-auto w-[100%] my-6  grid grid-cols-1 gap-4 ">
                  {_two.map((currency, index: number) => {
                    return (
                      <Details
                        key={currency?.id}
                        item={currency}
                        percentChangeIn24Hours={percentChangeIn24Hours[index]}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mx-auto w-[100%] my-6  grid grid-cols-1 gap-4 ">
                  {_three.map((currency, index: number) => {
                    return (
                      <Details
                        key={currency?.id}
                        item={currency}
                        percentChangeIn24Hours={percentChangeIn24Hours[index]}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mx-auto w-[100%] my-6  grid grid-cols-1 gap-4 ">
                  {_four.map((currency, index: number) => {
                    return (
                      <Details
                        key={currency?.id}
                        item={currency}
                        percentChangeIn24Hours={percentChangeIn24Hours[index]}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mx-auto w-[100%] my-6  grid grid-cols-1 gap-4 ">
                  {_five.map((currency, index: number) => {
                    return (
                      <Details
                        key={currency?.id}
                        item={currency}
                        percentChangeIn24Hours={percentChangeIn24Hours[index]}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mx-auto w-[100%] my-6  grid grid-cols-1 gap-4 ">
                  {_six.map((currency, index: number) => {
                    return (
                      <Details
                        key={currency?.id}
                        item={currency}
                        percentChangeIn24Hours={percentChangeIn24Hours[index]}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      ) : (
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
      )}
    </div>
  );
};

export default SwiperCurrency;
