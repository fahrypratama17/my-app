
import { Card, CardAction, CardContent } from "@/shared/component/ui/card";
import { cardType } from "@/feature/supplier/detail/types/type";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/shared/component/ui/button";

type Props = {
  data: cardType;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

const DetailSupplierCard = ({ data, quantity, onIncrease, onDecrease }: Props) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardContent className="grid grid-cols-[0.7fr_1fr] gap-1 px-2 md:gap-5 md:px-4">
        <Image
          src={data.image}
          alt="product-images"
          width={200}
          height={200}
          className="w-full object-cover"
        ></Image>
        <div>
          <p className="text-[10px] font-semibold text-green-900 md:text-2xl">
            {data.title}
          </p>
          <p className="text-[8px] font-semibold text-[#A7A7A7] md:text-xl">
            {data.unit}
          </p>
          <p className="text-[8px] font-semibold text-green-900 md:text-xl">
            {data.cost}
          </p>
        </div>
      </CardContent>
      <CardAction className="flex w-full items-center justify-between px-2 md:px-4 md:py-4">
        <p className="rounded-[32px] bg-green-50 px-2 text-[8px] font-semibold md:px-4 md:text-xl">
          {data.status}
        </p>
        <div className="flex items-center justify-between gap-1 md:gap-4">
          <Button
            onClick={onDecrease}
            className="h-4 cursor-pointer rounded-[12px] bg-green-100 p-0 hover:bg-green-200 md:h-8 md:p-1 md:px-2"
          >
            <Minus className="p-1 md:p-0" />
          </Button>
          <p
            className={`w-3 text-center text-[8px] font-semibold md:w-7 md:text-xl ${quantity === 0 ? "opacity-50" : ""}`}
          >
            {quantity}
          </p>
          <Button
            onClick={onIncrease}
            className="h-4 cursor-pointer rounded-[12px] bg-orange-500 p-0 hover:bg-orange-600 md:h-8 md:p-1 md:px-2"
          >
            <Plus className="p-1 md:p-0" />
          </Button>
        </div>
      </CardAction>
    </Card>
  );
};

export default DetailSupplierCard;
