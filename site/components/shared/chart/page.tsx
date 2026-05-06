import * as React from "react";
import { useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface ItemsType {
  id: number;
  buyPrice: number;
  sellPrice: number;
  CurrencyId?: number;
  CoinId?: number;
  createdAt: string;
  updatedAt: string;
}
interface PropsType {
  items: ItemsType[];
}

const PercentAreaChart: React.FC<PropsType> = ({ items }) => {
  const [sellPrice, setItems] = useState<ItemsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    const loadData = async () => {
      setItems(items);
      setLoading(false);
    };

    loadData();
  }, [items]);

  const getPercents = (array: ItemsType[]) => {
    return array.map((v) => v.sellPrice).filter((v) => !isNaN(v));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <CircularProgress
          sx={{
            color: `${theme === "light" ? "#844A74" : "#7A60FF"}`,
          }}
          className="purple-progress"
          size={20}
        />
      </div>
    );
  }
  if (sellPrice.length === 0 || sellPrice.length === 1) {
    return (
      <div className={`text-center  text-[${theme === "light" ? "#844A74" : "#7A60FF"}]`}>
        _
      </div>
    );
  }

  const percents = getPercents(sellPrice);

  return (
    <LineChart
      width={100}
      height={30}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      bottomAxis={{ disableLine: true, disableTicks: false }}
      leftAxis={{ disableLine: true, disableTicks: false }}
      series={[
        {
          data: percents,
          type: "line",
          area: true,
          stack: "total",
          showMark: false,
          color: theme === "light" ? "#804DB4" : "#70A0F0",
        },
      ]}
      yAxis={[
        {
          valueFormatter: () => "",
        },
      ]}
    />
  );
};

export default PercentAreaChart;
