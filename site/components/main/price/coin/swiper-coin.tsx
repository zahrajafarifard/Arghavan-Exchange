"use client";

import { Pagination, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";

import CircularProgress from "@mui/material/CircularProgress";
import Details from "../../../shared/coin-details";
import { useSocketQuery } from "@/hooks/useSocketQuery";

import { useFeaturedCoins } from "@/hooks/useCoin";
import { useEffect } from "react";

interface FeaturedItemsType {
  id: number;
  Coin: { name: string };
  buyPrice: number;
  pBuyPrice: number;
  sellPrice: number;
  pSellPrice: number;
}

interface SwiperCoinProps {
  items: FeaturedItemsType[];
  theme: string;
  responseStatus: number;
}

interface PercentChange {
  percentChangeIn24Hours: number;
}

interface FeaturedCoinsResponse {
  coins: FeaturedItemsType[];
  percentChangeIn24Hours: PercentChange[];
}

const SwiperCoin: React.FC<SwiperCoinProps> = ({
  items,
  theme,
  responseStatus,
}) => {
  const { data, error, isLoading } = useFeaturedCoins();

  const featuredItems = items ?? data?.coins;
  const percentChangeIn24Hours = data?.percentChangeIn24Hours ?? [];

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
  

  if (featuredItems?.length == 0 && responseStatus !== 406) {
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
            <div className="mx-auto w-full my-6  grid grid-cols-3 gap-x-4">
              {one?.map((coin, index: number) => {
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
          {two?.length !== 0 ? (
            <SwiperSlide>
              <div className="mx-auto w-full my-6 grid grid-cols-3 gap-x-4">
                {two?.map((coin, index: number) => {
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
            <div className="mx-auto w-full my-6  grid grid-cols-2 gap-x-4">
              {one_1?.map((coin, index: number) => {
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
            <div className="mx-auto w-full my-6 grid grid-cols-2 gap-x-4">
              {two_2?.map((coin, index: number) => {
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
            <div className="mx-auto w-full my-6 grid grid-cols-2 gap-x-4">
              {three_3?.map((coin, index: number) => {
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
            <div className="mx-auto w-[80%] my-6  grid grid-cols-1 gap-x-5 screen500:w-[100%] ">
              {_one?.map((coin, index: number) => {
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
            <div className="mx-auto w-[80%] my-6 grid grid-cols-1 gap-x-5 screen500:w-[100%] ">
              {_two?.map((coin, index: number) => {
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
            <div className="mx-auto w-[80%] my-6 grid grid-cols-1 gap-x-5 screen500:w-[100%] ">
              {_three?.map((coin, index: number) => {
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
            <div className="mx-auto w-[80%] my-6 grid grid-cols-1 gap-x-5 screen500:w-[100%] ">
              {_four?.map((coin, index: number) => {
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
            <div className="mx-auto w-[80%] my-6 grid grid-cols-1 gap-x-5 screen500:w-[100%] ">
              {_five?.map((coin, index: number) => {
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
            <div className="mx-auto w-[80%] my-6 grid grid-cols-1 gap-x-5 screen500:w-[100%] ">
              {_six?.map((coin, index: number) => {
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
  );
};

export default SwiperCoin;
