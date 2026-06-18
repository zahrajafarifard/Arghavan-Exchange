import { apiFetch } from "@/lib/api";

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

interface FeaturedCoinsResponse {
  coins: FeaturedCoinItem[];
  percentChangeIn24Hours: PercentChange[];
}
export function getCoinPricesForChart(id: number) {
  return apiFetch<{ data: any }>("/api/getCoinPricesForChart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
}
export function featuredCoins() {
  return apiFetch<FeaturedCoinsResponse>("/api/featuredCoins");
}
