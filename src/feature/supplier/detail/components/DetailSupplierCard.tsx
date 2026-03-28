"use client";

import { Card, CardAction, CardContent } from "@/shared/component/ui/card";
import { cardType } from "@/feature/supplier/detail/types/type";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/shared/component/ui/button";

type Props = {
  data: cardType;
};

const DetailSupplierCard = ({ data }: Props) => {
  const [quantity, setQuantity] = useState(0);

  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleMinus = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <Card>
      <CardContent className="grid grid-cols-[0.7fr_1fr] gap-5">
        <Image
          src={data.image}
          alt="product-images"
          width={200}
          height={200}
          className="w-full object-cover"
        ></Image>
        <div>
          <p className="text-2xl-semibold text-green-900">{data.title}</p>
          <p className="text-xl-semibold text-[#A7A7A7]">{data.unit}</p>
          <p className="text-xl-semibold text-green-900">{data.cost}</p>
        </div>
      </CardContent>
      <CardAction className="flex w-full items-center justify-between px-4 py-4">
        <p className="text-xl-semibold rounded-[32px] bg-green-50 px-4">
          {data.status}
        </p>
        <div className="flex items-center justify-between gap-4">
          <Button
            onClick={handleMinus}
            className="text-xl-semibold cursor-pointer rounded-[12px] bg-green-100 p-1 px-2 hover:bg-green-200"
          >
            <Minus />
          </Button>
          <p
            className={`text-xl-semibold w-7 text-center ${quantity === 0 ? "opacity-50" : ""}`}
          >
            {quantity}
          </p>
          <Button
            onClick={handlePlus}
            className="text-xl-semibold cursor-pointer rounded-[12px] bg-orange-500 p-1 px-2 hover:bg-orange-600"
          >
            <Plus />
          </Button>
        </div>
      </CardAction>
    </Card>
  );
};

export default DetailSupplierCard;
