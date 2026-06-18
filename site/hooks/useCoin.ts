import { useQuery } from "@tanstack/react-query";
import { getCoinPricesForChart, featuredCoins } from "@/services/coin.service";

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

export const useCoinPrices = (id?: number) => {
  return useQuery({
    queryKey: ["coinPrices", id],
    queryFn: () => getCoinPricesForChart(id!),
    enabled: !!id,
  });
};

export const useFeaturedCoins = () =>
  useQuery<{
    coins: FeaturedCoinItem[];
    percentChangeIn24Hours: PercentChange[];
  }>({
    queryKey: ["featuredCoins"],
    queryFn: featuredCoins,
  });
