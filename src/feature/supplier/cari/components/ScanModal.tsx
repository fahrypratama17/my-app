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
      <div className="flex flex-col items-center justify-center gap-6">
        <Card className="w-full max-w-[60%] rounded-2xl border-4 border-green-900 p-0">
          <Image
            src={"/images/QRIS-1.png"}
            alt={"qris"}
            width={1000}
            height={1000}
          />
        </Card>
        <h2 className="text-xl-medium text-green-500">
          Kadaluarsa dalam
          <span className="text-xl-bold text-green-700">00.46</span>
        </h2>
        <div className="rounded-[40px] bg-green-50 px-8 py-2">
          <p className="text-lg-semibold text-green-900">
            Order ID: #ORD-MBG-7729
          </p>
        </div>
        <Button className="flex w-full max-w-[90%] cursor-pointer items-center justify-center gap-4 rounded-[12px] border-2 border-green-600 bg-orange-600 py-6 text-xl font-bold text-orange-50">
          Segarkan status <RotateCw size={40} />
        </Button>
      </div>
    </div>
  );
};

export default ScanModal;
