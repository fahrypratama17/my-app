import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import { Rows4 } from "lucide-react";

const DaftarPesananCard = () => {
  return (
    <Card className="w-full rounded-[40px] border-2 border-green-900 py-0">
      <CardHeader className="flex items-center gap-4 rounded-none bg-green-600 px-8 py-4 text-orange-50">
        <div>
          <Rows4 />
        </div>
        <p className="text-3xl-bold">Daftar Pesanan</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-12 px-8 py-4 pb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl-medium">Tomat Segar Mantap Nikmat</p>
            <p className="text-lg-medium text-[#A7A7A7]">12 Kg x Rp 10.000</p>
          </div>
          <p className="text-xl-bold text-green-900">Rp 120.000</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl-medium">Brokoli Segar dan Sehat</p>
            <p className="text-lg-medium text-[#A7A7A7]">8 Kg x Rp 45.000</p>
          </div>
          <p className="text-xl-bold text-green-900">Rp 360.000</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl-medium">Kentang Organik</p>
            <p className="text-lg-medium text-[#A7A7A7]">5 Kg x Rp 16.000</p>
          </div>
          <p className="text-xl-bold text-green-900">Rp 90.000</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DaftarPesananCard;
