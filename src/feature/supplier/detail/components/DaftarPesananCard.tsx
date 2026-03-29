import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import { ChevronDown, Rows4 } from "lucide-react";
import { Button } from "@/shared/component/ui/button";

const DaftarPesananCard = () => {
  return (
    <Card className="w-full rounded-[16px] border-2 border-green-900 py-0 md:rounded-[40px] md:pb-4">
      <CardHeader className="flex items-center gap-2 rounded-none bg-green-600 px-4 py-4 text-orange-50 md:gap-4 md:px-8">
        <Rows4 className="p-1 md:p-0" />
        <p className="text-[12px] font-bold md:text-3xl">Daftar Pesanan</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 px-4 pb-8 md:gap-12 md:px-8 md:py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-medium md:text-xl">
              Tomat Segar Mantap Nikmat
            </p>
            <p className="text-[8px] font-medium text-[#A7A7A7] md:text-lg">
              12 Kg x Rp 10.000
            </p>
          </div>
          <p className="text-[10px] font-bold text-green-900 md:text-xl">
            Rp 120.000
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-medium md:text-xl">
              Brokoli Segar dan Sehat
            </p>
            <p className="text-[8px] font-medium text-[#A7A7A7] md:text-lg">
              8 Kg x Rp 45.000
            </p>
          </div>
          <p className="text-[10px] font-bold text-green-900 md:text-xl">
            Rp 360.000
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-medium md:text-xl">
              Kentang Organik
            </p>
            <p className="text-[8px] font-medium text-[#A7A7A7] md:text-lg">
              5 Kg x Rp 16.000
            </p>
          </div>
          <p className="text-[10px] font-bold text-green-900 md:text-xl">
            Rp 90.000
          </p>
        </div>
        <Button className="h-6 w-[40%] cursor-pointer border-2 border-green-900 bg-green-50 text-green-900 hover:scale-105 md:w-[35%] md:py-4">
          <p className="text-[8px] font-semibold md:text-[18px]">
            Lihat lebih banyak
          </p>
          <ChevronDown className="p-1 md:p-0" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default DaftarPesananCard;
