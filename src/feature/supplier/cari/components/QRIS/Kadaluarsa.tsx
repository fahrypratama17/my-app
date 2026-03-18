import { Card } from "@/shared/component/ui/card";
import Image from "next/image";
import { Button } from "@/shared/component/ui/button";
import { RotateCw, Timer } from "lucide-react";

const Kadaluarsa = () => {
  return (
    <div className="mx-auto h-screen w-[95%] bg-white">
      <div className="text-4xl-bold flex items-start pt-10 text-green-500">
        <Image
          src={"/images/QRIS-2.png"}
          alt={"qris"}
          width={200}
          height={200}
        />
        <h1>READY</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <Card className="mx-auto flex h-[50vh] w-full max-w-[25%] items-center justify-center rounded-2xl border-4 border-green-900">
          <Timer className="text-green-500" size={100} />
          <p className="text-xl-bold text-green-700">QR Kadaluarsa</p>
        </Card>
        <h2 className="text-xl-medium text-green-500">
          Kadaluarsa dalam{" "}
          <span className="text-xl-bold text-green-700">00.46</span>
        </h2>
        <div className="rounded-[40px] bg-green-50 px-8 py-2">
          <p className="text-lg-semibold text-green-900">
            Order ID: #ORD-MBG-7729
          </p>
        </div>
        <Button className="flex w-full max-w-[25%] items-center justify-center gap-4 rounded-[12px] border-2 border-green-600 bg-orange-600 py-6 text-xl font-bold text-orange-50">
          Segarkan status <RotateCw size={40} />{" "}
        </Button>
      </div>
    </div>
  );
};

export default Kadaluarsa;
