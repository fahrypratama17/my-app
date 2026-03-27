import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import Image from "next/image";
import { Pen, Trash2 } from "lucide-react";
import { cardType } from "@/feature/mitra/produk/types/type";

type Props = {
  data: cardType;
};

const CardProduct = ({ data }: Props) => {
  return (
    <Card className="rounded-[12px] bg-green-50">
      <CardHeader className="w-full">
        <Image
          className="h-50 w-full rounded-[12px] object-cover"
          src={data.image || "/images/product.png"}
          alt={"gambar"}
          width={900}
          height={900}
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-sm-semibold rounded-[12px] border border-green-900 bg-green-100 px-4 text-green-900">
            {data.category}
          </p>
          <p className="text-sm-semibold text-green-300">Stok {data.stok}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-md-bold text-green-500">{data.name}</p>
          <p className="text-sm-semi text-green-300">{data.id}</p>
          <p className="text-md-bold text-green-800">{data.cost}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm-semibold w-[40%] rounded-[12px] bg-green-100 py-1 text-center text-green-900">
            {data.status}
          </p>
          <div className="flex items-center justify-between gap-2">
            <div className="cursor-pointer rounded-lg bg-orange-100 p-2 hover:scale-105">
              <Pen className="h-4 w-4 text-orange-700" />
            </div>
            <div className="cursor-pointer rounded-lg bg-[#FFE2E2] p-2 hover:scale-105">
              <Trash2 className="h-4 w-4 text-[#FF4747]" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
