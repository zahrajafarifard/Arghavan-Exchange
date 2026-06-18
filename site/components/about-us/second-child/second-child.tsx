import React from "react";

import Details from "./details";

interface PropsType {
  items: { id: number; icon: string; title: string; text: string }[];
}
const SecondChild: React.FC<PropsType> = ({ items }) => {
  return (
    <section aria-label="ویژگی‌های صرافی" className="w-full mx-auto">
      <div className="grid grid-cols-4  gap-14 screen1460:gap-8 screen1400:gap-6 screen1350:gap-3">
        {items.map((item) => (
          <Details key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default SecondChild;
