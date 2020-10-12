import { Card } from "antd";
import React from "react";

const InfoCard = (props) => {
  const { Icon, Num, Desc, Color } = props;
  let color1 = `bg-${Color}-300`;
  let color2 = `text-${Color}-700`;
  let className1 =
    "w-16 h-16 rounded-full flex justify-center items-center " + color1;
  let className2 = "text-4xl " + color2;
  return (
    <Card style={{ width: 300 }}>
      <div className="w-full p-4 flex flex-row justify-between">
        <div className={className1}>
          <span className={className2}>{Icon}</span>
        </div>
        <div className="flex flex-col items-center w-1/2">
          <span className="font-bold text-2xl">{Num}</span>
          <span className="font-bold text-xl text-blue-700">{Desc}</span>
        </div>
      </div>
    </Card>
  );
};

export default InfoCard;
