import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import Image from "next/image";
import { MapPin, CircleAlert, Ban } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import { cardType } from "@/feature/cms/manajemen/types/type";

type Props = {
  data: cardType;
  onBayar: () => void;
};

const ManajemenCard = ({ data, onBayar }: Props) => {
  return (
    <Card className="border border-green-100 p-0 md:border-2">
      <CardHeader className="w-full p-0">
        <Image
          className="h-20 w-full object-cover md:h-45"
          src={data.image || "/images/supplier-1.jpg"}
          alt={"gambar"}
          width={200}
          height={200}
        />
      </CardHeader>
      <CardContent className="flex h-25 flex-col justify-between px-2 md:h-45 md:px-4">
        <div className="flex justify-between">
          <div className="space-y-1 md:space-y-3">
            <h2 className="text-[10px] font-bold text-green-900 md:text-xl">
              {data.title}
            </h2>
            <div className="flex items-center gap-1 text-green-400 md:gap-2">
              <MapPin className="h-2 w-2 md:h-5 md:w-5" />
              <p className="text-[8px] font-semibold md:text-sm">
                {data.location}
              </p>
            </div>
          </div>
          <div>
            <p className="rounded-[20px] bg-green-100 px-2 text-[8px] font-semibold text-green-500 md:text-sm">
              {data.status}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-[8px] font-semibold text-green-400 md:gap-4 md:text-sm">
          <p>{data.product} produk</p>
          <p>{data.total} pesanan</p>
        </div>
        <div className="grid grid-cols-[1fr_0.2fr_0.2fr] items-center gap-2 pb-4 md:gap-4">
          <Button
            onClick={onBayar}
            className="h-5 cursor-pointer bg-green-50 text-[8px] font-semibold text-green-500 transition-transform duration-200 hover:scale-105 md:py-4 md:text-sm"
          >
            Detail
          </Button>
          <div className="mx-auto cursor-pointer rounded-full bg-orange-50 p-1 text-orange-300 transition-transform duration-200 hover:scale-105 md:p-2">
            <CircleAlert className="h-2 w-2 md:h-5 md:w-5" />
          </div>
          <div className="mx-auto cursor-pointer rounded-full bg-[#FFE2E2] p-1 text-[#FF4747] transition-transform duration-200 hover:scale-105 md:p-2">
            <Ban className="h-2 w-2 md:h-5 md:w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ManajemenCard;
