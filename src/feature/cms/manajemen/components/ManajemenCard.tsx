import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import Image from "next/image";
import { MapPin, CircleAlert, Ban } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import { cardType } from "@/feature/cms/manajemen/types/type";

type Props = {
  data: cardType;
};

const ManajemenCard = ({ data }: Props) => {
  return (
    <Card className="border-2 border-green-100 p-0">
      <CardHeader className="w-full p-0">
        <Image
          className="h-45 w-full object-cover"
          src={data.image || "/images/supplier-1.jpg"}
          alt={"gambar"}
          width={200}
          height={100}
        />
      </CardHeader>
      <CardContent className="flex h-45 flex-col justify-between">
        <div className="flex justify-between">
          <div className="space-y-3">
            <h2 className="text-xl-bold text-green-900">{data.title}</h2>
            <div className="flex items-center gap-2 text-green-400">
              <MapPin size={20} />
              <p className="text-sm-semibold">{data.location}</p>
            </div>
          </div>
          <div>
            <p className="text-sm-semibold rounded-[20px] bg-green-100 px-2 text-green-500">
              {data.status}
            </p>
          </div>
        </div>

        <div className="text-sm-semibold flex items-center justify-between gap-4 text-green-400">
          <p>{data.product} produk</p>
          <p>{data.total} pesanan</p>
        </div>
        <div className="grid grid-cols-[1fr_0.2fr_0.2fr] items-center gap-4 pb-4">
          <Button className="cursor-pointer bg-green-50 text-green-500 transition-transform duration-200 hover:scale-105">
            Detail
          </Button>
          <div className="mx-auto cursor-pointer rounded-full bg-orange-50 p-2 text-orange-300 transition-transform duration-200 hover:scale-105">
            <CircleAlert size={20} />
          </div>
          <div className="mx-auto cursor-pointer rounded-full bg-[#FFE2E2] p-2 text-[#FF4747] transition-transform duration-200 hover:scale-105">
            <Ban size={20} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ManajemenCard;
