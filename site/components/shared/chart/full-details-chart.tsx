import * as React from "react";
import { useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import CircularProgress from "@mui/material/CircularProgress";
import moment from "moment-jalaali";
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
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [sellPrice, setItems] = useState<ItemsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      setItems(items);
      setLoading(false);
    };

    loadData();
  }, [items]);

  const getPercents = (array: ItemsType[]) => {
    return array
      .map((v) => {
        const sellPrice = v.sellPrice;
        return !isNaN(sellPrice) ? sellPrice / 1000 : NaN;
      })
      .filter((v) => !isNaN(v));
  };

  const getDates = (array: ItemsType[]) => {
    return array.map((v) => {
      return moment(v.createdAt).locale("fa").format("jMM/jDD HH:mm");
    });
  };

  if (loading) {
    return (
      <div className="w-full mx-auto my-20 flex flex-col justify-center items-center screen700:my-14">
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
  if (sellPrice.length === 0 || sellPrice.length === 1) {
    return (
      <div className={`text-[${theme === "light" ? "#844A74" : "#7A60FF"}]`}>
        _
      </div>
    );
  }

  const percents = getPercents(sellPrice);
  const dates = getDates(sellPrice);

  return (
    <LineChart
      width={
        window.innerWidth > 1200
          ? 500
          : window.innerWidth < 1200 && window.innerWidth > 770
          ? 300
          : 250
      }
      height={
        window.innerWidth > 1200
          ? 400
          : window.innerWidth < 1200 && window.innerWidth > 770
          ? 300
          : 280
      }
      margin={{ top: 40, right: 0, bottom: 40, left: 10 }}
      series={[
        {
          data: percents,
          type: "line",
          // area: true,
          stack: "total",
          color: theme === "light" ? "#804DB4" : "#70A0F0",
        },
      ]}
      xAxis={[
        {
          data: dates,
          scaleType: "point",
          tickLabelStyle: {
            fill: theme === "light" ? "#242424" : "#fff",
          },
          sx: {
            "& .MuiChartsAxis-line": {
              stroke: theme === "light" ? "#242424" : "#fff",
            },
            "& .MuiChartsAxis-tick": {
              stroke: theme === "light" ? "#242424" : "#fff",
            },
          },
        },
      ]}
      yAxis={[
        {
          tickLabelStyle: {
            fill: theme === "light" ? "#844A74" : "#7A60FF",
          },
          sx: {
            "& .MuiChartsAxis-line": {
              stroke: theme === "light" ? "#844A74" : "#7A60FF",
            },
            "& .MuiChartsAxis-tick": {
              stroke: theme === "light" ? "#844A74" : "#7A60FF",
            },
          },
        },
      ]}
    />
  );
};

export default PercentAreaChart;
