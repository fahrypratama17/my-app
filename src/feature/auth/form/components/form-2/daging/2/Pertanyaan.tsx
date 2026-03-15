import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import { Beef } from "lucide-react";

const Pertanyaan = () => {
  return (
    <Card className="border-2 border-green-900 bg-green-50 px-12 py-8">
      <CardHeader className="mb-8 flex items-center justify-start gap-4">
        <div className="rounded-xl bg-orange-50 p-2">
          <Beef className="text-orange-600" size={40} />
        </div>

        <div className="flex flex-col items-start justify-center">
          <p className="text-3xl-bold text-green-900">Kategori Daging</p>
          <p className="text-lg-medium text-green-500">
            Informasi utama mengenai entitas bisnis Anda
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl-bold text-green-900">
            1. Jenis daging yang dijual?
          </h2>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-white"></div>
            <h3 className="text-2xl-medium text-green-900">Ayam</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-white"></div>
            <h3 className="text-2xl-medium text-green-900">Sapi</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-orange-500"></div>
            <h3 className="text-2xl-medium text-green-900">Ikan</h3>
          </div>
        </div>
        <div className="flex flex-col gap-8 pb-12">
          <h2 className="text-2xl-bold text-green-900">
            2. Apakah ikan memiliki ciri insang berawarna merah, mata ikan
            jernih (tidak buram), daging kenyal dan kembali saat ditekan, dan
            tidak berbau busuk?
          </h2>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-orange-500"></div>
            <h3 className="text-2xl-medium text-green-900">Ya</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-white"></div>
            <h3 className="text-2xl-medium text-green-900">Tidak</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Pertanyaan;
