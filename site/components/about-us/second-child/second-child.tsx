import React from "react";

import Details from "./details";

interface PropsType {
  items: { id: number; icon: string; title: string; text: string }[];
}
const SecondChild: React.FC<PropsType> = ({ items }) => {
  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-4 gap-14 screen1460:gap-8 screen1400:gap-6 screen1350:gap-3">
        {items?.map((item) => {
          return (
            <div key={item.id}>
              <Details item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondChild;
