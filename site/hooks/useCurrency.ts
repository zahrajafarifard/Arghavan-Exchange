import { useQuery } from "@tanstack/react-query";
import {
  getCurrencyPricesForChart,
  featuredCurrencies,
} from "@/services/currency.service";

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

interface PercentChange {
  percentChangeIn24Hours: number;
}

export const useCurrencyPrices = (id?: number) => {
  return useQuery({
    queryKey: ["currencyPrices", id],
    queryFn: () => getCurrencyPricesForChart(id!),
    enabled: !!id,
  });
};

export const useFeaturedCurrencies = () =>
  useQuery<{
    currs: FeaturedCurrencyItem[];
    percentChangeIn24Hours: PercentChange[];
  }>({
    queryKey: ["featuredCurrencies"],
    queryFn: featuredCurrencies,
  });
