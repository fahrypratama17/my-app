import { Card } from "@/shared/component/ui/card";
import Image from "next/image";
import { Button } from "@/shared/component/ui/button";
import { RotateCw } from "lucide-react";

const ScanModal = () => {
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
        <h1 className="text-[20px] text-green-500">READY</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 md:gap-6">
        <Card className="w-full max-w-[80%] rounded-2xl border-4 border-green-900 p-0 md:max-w-[60%]">
          <Image
            src={"/images/QRIS-1.png"}
            alt={"qris"}
            width={1000}
            height={1000}
          />
        </Card>
        <h2 className="text-[10px] font-medium text-green-500 md:text-xl">
          Kadaluarsa dalam
          <span className="text-[10px] font-bold text-green-700 md:text-xl">
            {" "}
            00.46
          </span>
        </h2>
        <div className="rounded-[40px] bg-green-50 px-8 py-2">
          <p className="text-[8px] font-semibold text-green-900 md:text-lg">
            Order ID: #ORD-MBG-7729
          </p>
        </div>
        <Button className="mt-3 flex w-full max-w-[60%] cursor-pointer items-center justify-center gap-1 rounded-[12px] border border-green-600 bg-orange-600 text-[8px] font-bold text-orange-50 md:mt-0 md:max-w-[90%] md:gap-4 md:border-2 md:py-6 md:text-xl">
          Segarkan status <RotateCw className="p-1 md:p-0" />
        </Button>
      </div>
    </div>
  );
};

export default ScanModal;
