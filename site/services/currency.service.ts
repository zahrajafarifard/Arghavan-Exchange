import { apiFetch } from "@/lib/api";

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

interface FeaturedCurrenciesResponse {
  currs: FeaturedCurrencyItem[];
  percentChangeIn24Hours: PercentChange[];
}

export function getCurrencyPricesForChart(id: number) {
  return apiFetch<{ data: any }>("/api/getCurrencyPricesForChart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
}

export function featuredCurrencies() {
  return apiFetch<FeaturedCurrenciesResponse>("/api/featuredCurrencies");
}
