import { Card, CardContent } from "@/shared/component/ui/card";
import { Mitra } from "@/feature/mitra/dashboard/types/type";

type Props = {
  data: Mitra[];
};

const VerifikasiCardMobile = ({ data }: Props) => {
  return (
    <>
      {data.map((item) => {
        const { id, pembeli, produk, jumlah, total, status, aksi } = item;

        return (
          <Card key={id} className="border border-green-900 bg-green-50 py-4">
            <CardContent className="flex flex-col gap-4 px-2">
              <div className="grid w-full grid-cols-[1.5fr_0.5fr] justify-between">
                <div className="flex flex-col">
                  <p className="text-[10px] font-bold">{id}</p>
                </div>
                <div className="text-[8px] font-medium">
                  <p className="h-3 rounded-[12px] bg-[#A7A7A7] px-1 text-center">
                    {status}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="grid grid-cols-[0.4fr_1fr] items-start">
                  <p className="w-12 text-[8px] font-bold">Pembeli</p>
                  <p className="text-[8px] font-bold">{pembeli}</p>
                </div>
                <div className="grid grid-cols-[0.4fr_1fr] items-start">
                  <p className="w-12 text-[8px] font-bold">Produk</p>
                  <p className="text-[8px] font-bold">{produk}</p>
                </div>
                <div className="grid grid-cols-[0.4fr_1fr] items-start">
                  <p className="w-12 text-[8px] font-bold">Jumlah</p>
                  <p className="text-[8px] font-bold">{jumlah}</p>
                </div>
              </div>

              <div className="flex h-5 w-[90%] items-center justify-between rounded-[12px] bg-orange-600 px-2 text-[10px] text-green-50">
                <p>Total</p>
                <p>{total}</p>
              </div>

              <div className="flex h-5 w-[50%] items-center justify-center rounded-[12px] border border-green-900 bg-green-500 text-[10px] text-green-50">
                <p>{aksi}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default VerifikasiCardMobile;
