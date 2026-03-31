import { Card, CardContent } from "@/shared/component/ui/card";
import { Order } from "@/feature/cms/monitoring/types/type";

type Props = {
  data: Order[];
};

const AdminCardMobile = ({ data }: Props) => {
  return (
    <>
      {data.map((item) => {
        const { id, dapur, mitra, produk, jumlah, total, tanggal, status } =
          item;

        return (
          <Card key={id} className="border border-green-900 bg-green-50 py-4">
            <CardContent className="flex flex-col gap-4 px-2">
              <div className="grid w-full grid-cols-[1.5fr_0.5fr] justify-between">
                <div className="flex flex-col">
                  <p className="text-[10px] font-bold">{id}</p>
                  <p className="text-[8px] font-bold">{tanggal}</p>
                </div>
                <div className="text-[8px] font-medium">
                  <p className="h-3 rounded-[12px] bg-[#A7A7A7] px-1 text-center">
                    {status}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="grid grid-cols-[0.4fr_2fr] items-start">
                  <p className="w-12 text-[8px] font-bold">SPPG</p>
                  <p className="text-[8px] font-bold">{dapur}</p>
                </div>
                <div className="grid grid-cols-[0.4fr_2fr] items-start">
                  <p className="w-12 text-[8px] font-bold">Mitra</p>
                  <p className="text-[8px] font-bold">{mitra}</p>
                </div>
                <div className="grid grid-cols-[0.4fr_2fr] items-start">
                  <p className="w-12 text-[8px] font-bold">Produk</p>
                  <p className="text-[8px] font-bold">{produk}</p>
                </div>
                <div className="grid grid-cols-[0.4fr_2fr] items-start">
                  <p className="w-12 text-[8px] font-bold">Jumlah</p>
                  <p className="text-[8px] font-bold">{jumlah}</p>
                </div>
              </div>
              <div className="flex w-[90%] justify-center gap-4 rounded-[12px] bg-orange-600 text-[10px] font-bold text-orange-50">
                <p>Total</p>
                <p>{total}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default AdminCardMobile;
