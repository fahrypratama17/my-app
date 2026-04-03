import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import Image from "next/image";
import { cardType } from "@/feature/mitra/produk/types/type";
import ProductEdit from "@/feature/mitra/produk/components/ProductEdit";
import ProductDelete from "@/feature/mitra/produk/components/ProductDelete";

type Props = {
  data: cardType;
  onEdit?: () => void;
  onDelete?: () => void;
};

const CardProduct = ({ data }: Props) => {
  return (
    <Card className="rounded-[12px] bg-green-50">
      <CardHeader className="w-full px-2 md:px-4">
        <Image
          className="h-25 w-full rounded-[12px] object-cover md:h-50"
          src={data.image || "/images/product.png"}
          alt={"gambar"}
          width={900}
          height={900}
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-2 px-2 md:gap-4 md:px-4">
        <div className="flex items-center justify-between">
          <p className="rounded-[12px] border border-green-900 bg-green-100 px-2 text-[12px] font-semibold text-green-900 md:px-4 md:text-sm">
            {data.category}
          </p>
          <p className="text-[12px] font-semibold text-green-300 md:text-sm">
            Stok {data.stok}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[12px] font-bold text-green-500 md:text-[16px]">
            {data.name}
          </p>
          <p className="fomt-semi text-[8px] text-green-300 md:text-sm">
            {data.id}
          </p>
          <p className="text-[12px] font-bold text-green-800 md:text-[16px]">
            {data.cost}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="w-[50%] rounded-[12px] bg-green-100 text-center text-[12px] font-semibold text-green-900 md:w-[40%] md:py-1 md:text-sm">
            {data.status}
          </p>
          <div className="flex items-center justify-between gap-1 md:gap-2">
            <ProductEdit />
            <ProductDelete />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
