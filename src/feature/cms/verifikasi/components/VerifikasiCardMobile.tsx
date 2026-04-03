import { Card, CardContent } from "@/shared/component/ui/card";
import { Verif } from "@/feature/cms/verifikasi/types/type";
import { Button } from "@/shared/component/ui/button";
import { Eye } from "lucide-react";

type Props = {
  data: Verif[];
  onDetail: (supplier: Verif) => void;
};

const VerifikasiCardMobile = ({ data, onDetail }: Props) => {
  return (
    <>
      {data.map((item, index) => {
        const { id, usaha, pemilik, tanggal, status } = item;
        const cardKey = `${item.supplierId}-${id}-${index}`;

        return (
          <Card key={cardKey} className="border border-green-900 bg-green-50 py-4">
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
                <div className="grid grid-cols-[0.8fr_1fr] items-start">
                  <p className="w-12 text-[8px] font-bold">Nama Usaha</p>
                  <p className="text-[8px] font-bold">{usaha}</p>
                </div>
                <div className="grid grid-cols-[0.8fr_1fr] items-start">
                  <p className="w-12 text-[8px] font-bold">Pemilik</p>
                  <p className="text-[8px] font-bold">{pemilik}</p>
                </div>
                <div className="grid grid-cols-[0.8fr_1fr] items-start">
                  <p className="w-12 text-[8px] font-bold">Tanggal Daftar</p>
                  <p className="text-[8px] font-bold">{tanggal}</p>
                </div>
              </div>

              <Button
                onClick={() => onDetail(item)}
                className="flex h-5 w-[50%] cursor-pointer items-center justify-between border border-green-900 bg-green-500 text-start text-[10px]"
              >
                <p>Detail</p>
                <Eye className="p-1" />
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default VerifikasiCardMobile;
