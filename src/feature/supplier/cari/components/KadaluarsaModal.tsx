import { Card } from "@/shared/component/ui/card";
import Image from "next/image";
import { Button } from "@/shared/component/ui/button";
import { RotateCw, Timer } from "lucide-react";

const KadaluarsaModal = () => {
  return (
    <div className="w-full rounded-[28px] bg-white py-8">
      <div className="flex items-start pb-10">
        <Image
          className="h-auto w-30"
          src={"/images/QRIS-2.png"}
          alt={"qris"}
          width={200}
          height={200}
        />
        <h1 className="text-[20px] text-red-500">EXPIRED</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <Card className="mx-auto flex w-full max-w-[80%] items-center justify-center rounded-2xl border-4 border-green-900 py-16 md:max-w-[65%]">
          <Timer className="text-green-500" size={100} />
          <p className="text-xl-bold text-green-700">QR Kadaluarsa</p>
        </Card>
        <div className="rounded-[40px] bg-green-50 px-8 py-2">
          <p className="text-[8px] font-semibold text-green-900 md:text-lg">
            Order ID: #ORD-MBG-7729
          </p>
        </div>
        <Button className="flex w-full max-w-[60%] cursor-pointer items-center justify-center gap-1 rounded-[12px] border border-green-600 bg-orange-600 text-[8px] font-bold text-orange-50 md:mt-0 md:max-w-[90%] md:gap-4 md:border-2 md:py-6 md:text-xl">
          Segarkan status <RotateCw className="p-1 md:p-0" />
        </Button>
      </div>
    </div>
  );
};

export default KadaluarsaModal;
