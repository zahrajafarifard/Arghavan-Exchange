"use client";
import React, { useState, useEffect } from "react";

import { Pagination, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CircularProgress from "@mui/material/CircularProgress";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";

import Details from "../../../shared/currency-details";
import { useSocketQuery } from "@/hooks/useSocketQuery";
import { useFeaturedCurrencies } from "@/hooks/useCurrency";

interface FeaturedItemsType {
  id: number;
  Currency: { name: string; symbol?: string };
  buyPrice: number;
  pBuyPrice: number;
  sellPrice: number;
  pSellPrice: number;
}

interface SwiperCurrencyProps {
  items: FeaturedItemsType[];
  theme: string;
  responseStatus: number;
}

interface PercentChange {
  percentChangeIn24Hours: number;
}

interface FeaturedCurrenciesResponse {
  currs: FeaturedItemsType[];
  percentChangeIn24Hours: PercentChange[];
}
const SwiperCurrency: React.FC<SwiperCurrencyProps> = ({
  items,
  theme,
  responseStatus,
}) => {
  const { data, error, isLoading } = useFeaturedCurrencies();

  const featuredItems = items ?? data?.currs;
  const percentChangeIn24Hours = data?.percentChangeIn24Hours ?? [];

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

  const one = featuredItems?.slice(0, 3);
  const two = featuredItems?.slice(3, 6);

  const one_1 = featuredItems?.slice(0, 2);
  const two_2 = featuredItems?.slice(2, 4);
  const three_3 = featuredItems?.slice(4, 6);

  const _one = featuredItems?.slice(0, 1);
  const _two = featuredItems?.slice(1, 2);
  const _three = featuredItems?.slice(2, 3);
  const _four = featuredItems?.slice(3, 4);
  const _five = featuredItems?.slice(4, 5);
  const _six = featuredItems?.slice(5, 6);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  if (featuredItems?.length === 0 && responseStatus !== 405) {
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
    <>
      <div className="w-[100%] mx-auto screen1120:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          speed={600}
          dir="rtl"
          loop={true}
          modules={[Navigation, Pagination, Scrollbar]}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
        >
          <SwiperSlide>
            <div className="mx-auto w-full mt-6  grid grid-cols-3 gap-x-4 ">
              {one?.map((currency, index: number) => {
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
          {two?.length !== 0 ? (
            <SwiperSlide>
              <div className="mx-auto w-full mt-6 grid grid-cols-3 gap-x-4">
                {two?.map((currency, index: number) => {
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
          ) : (
            <></>
          )}
        </Swiper>
      </div>
      <div className="w-[100%] mx-auto screen1120:block hidden screen700:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          speed={600}
          dir="rtl"
          loop={true}
          modules={[Navigation, Pagination, Scrollbar]}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
        >
          <SwiperSlide>
            <div className="mx-auto w-full mt-6  grid grid-cols-2 gap-x-4 ">
              {one_1?.map((currency, index: number) => {
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
            <div className="mx-auto w-full mt-6 grid grid-cols-2 gap-x-4 ">
              {two_2?.map((currency, index: number) => {
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
            <div className="mx-auto w-full mt-6 grid grid-cols-2 gap-x-4">
              {three_3?.map((currency, index: number) => {
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
      <div className="w-[100%] mx-auto screen700:block hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          speed={600}
          dir="rtl"
          loop={true}
          modules={[Navigation, Pagination, Scrollbar]}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
        >
          <SwiperSlide>
            <div className="mx-auto w-[80%] mt-6  grid grid-cols-1 gap-x-2 screen500:w-[100%] ">
              {_one?.map((currency, index: number) => {
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
            <div className="mx-auto w-[80%] mt-6 grid grid-cols-1 gap-x-2 screen500:w-[100%] ">
              {_two?.map((currency, index: number) => {
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
            <div className="mx-auto w-[80%] mt-6 grid grid-cols-1 gap-x-2 screen500:w-[100%] ">
              {_three?.map((currency, index: number) => {
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
            <div className="mx-auto w-[80%] mt-6 grid grid-cols-1 gap-x-2 screen500:w-[100%] ">
              {_four?.map((currency, index: number) => {
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
            <div className="mx-auto w-[80%] mt-6 grid grid-cols-1 gap-x-2 screen500:w-[100%] ">
              {_five?.map((currency, index: number) => {
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
            <div className="mx-auto w-[80%] mt-6 grid grid-cols-1 gap-x-2 screen500:w-[100%] ">
              {_six?.map((currency, index: number) => {
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
  );
};

export default SwiperCurrency;
