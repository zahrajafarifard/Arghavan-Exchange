"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { io } from "socket.io-client";
import { Pagination, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";

import Details from "../../shared/coin-details";
import gifDark from "@/public/images/GIF-darkmode.gif";
import gifLight from "@/public/images/GIF-lightmode.gif";
import CircularProgress from "@mui/material/CircularProgress";

interface FeaturedItemsType {
  id: number;
  Coin: { name: string };
  buyPrice: number;
  pBuyPrice: number;
  sellPrice: number;
  pSellPrice: number;
}

interface SwiperCoinProps {
  propsItems: FeaturedItemsType[];
  responseStatus: number;
  theme: string;
}

const SwiperCoin: React.FC<SwiperCoinProps> = ({
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
        `${process.env.NEXT_PUBLIC_API_URL}/api/getallcoins`
      );

      switch (_response.status) {
        case 200:
          const _data = await _response.json();

          setItems(_data?.coins);

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
      socket.on("getCoins", (data) => {
        setItems(data);
      });
    });
  }, []);

  const one = items?.slice(0, 3);
  const two = items?.slice(3, 6);

  const _one = items?.slice(0, 2);
  const _two = items?.slice(2, 4);
  const _three = items?.slice(4, 6);

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
          <div className="w-[100%] mx-auto screen1180:hidden  ">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              speed={600}
              dir="rtl"
              loop={true}
              modules={[Navigation, Pagination, Scrollbar]}
              navigation={{
                prevEl: ".swiper-prev-coin",
                nextEl: ".swiper-next-coin",
              }}
            >
              <SwiperSlide>
                <div className="mx-auto w-full my-6  grid  grid-cols-3 gap-4 ">
                  {one.map((coin, index: number) => {
                    return (
                      <Details
                        key={coin?.id}
                        item={coin}
                        percentChangeIn24Hours={percentChangeIn24Hours[index]}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mx-auto w-full my-6  grid grid-cols-3 gap-4 ">
                  {two.map((coin, index: number) => {
                    return (
                      <Details
                        key={coin?.id}
                        item={coin}
                        percentChangeIn24Hours={percentChangeIn24Hours[index]}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-[100%] mx-auto hidden screen1180:block   ">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              speed={600}
              dir="rtl"
              loop={true}
              modules={[Navigation, Pagination, Scrollbar]}
              navigation={{
                prevEl: ".swiper-prev-coin",
                nextEl: ".swiper-next-coin",
              }}
            >
              <SwiperSlide>
                <div className="mx-auto w-full my-6  grid grid-cols-2 gap-4 screen700:grid-cols-1">
                  {_one.map((coin, index: number) => {
                    return (
                      <Details
                        key={coin?.id}
                        item={coin}
                        percentChangeIn24Hours={percentChangeIn24Hours[index]}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mx-auto w-full my-6  grid grid-cols-2 gap-4 screen700:grid-cols-1">
                  {_two.map((coin, index: number) => {
                    return (
                      <Details
                        key={coin?.id}
                        item={coin}
                        percentChangeIn24Hours={percentChangeIn24Hours[index]}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="mx-auto w-full my-6  grid grid-cols-2 gap-4 screen700:grid-cols-1">
                  {_three.map((coin, index: number) => {
                    return (
                      <Details
                        key={coin?.id}
                        item={coin}
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

export default SwiperCoin;
