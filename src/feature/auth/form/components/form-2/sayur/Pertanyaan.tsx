import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import { Carrot, ImageUp } from "lucide-react";
import { Button } from "@/shared/component/ui/button";

const Pertanyaan = () => {
  return (
    <Card className="border-2 border-green-900 bg-green-50 px-12 py-8">
      <CardHeader className="mb-8 flex items-center justify-start gap-4">
        <div className="rounded-xl bg-orange-50 p-2">
          <Carrot className="text-orange-600" size={40} />
        </div>

        <div className="flex flex-col items-start justify-center">
          <p className="text-3xl-bold text-green-900">Kategori Sayur</p>
          <p className="text-lg-medium text-green-500">
            Informasi utama mengenai entitas bisnis Anda
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl-bold text-green-900">1. Asal Sayur?</h2>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-orange-500"></div>
            <h3 className="text-2xl-medium text-green-900">Petani Lokal</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-white"></div>
            <h3 className="text-2xl-medium text-green-900">Distributor</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-white"></div>
            <h3 className="text-2xl-medium text-green-900">Kebun Sendiri</h3>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl-bold text-green-900">
            2. Kondisi sayur segar, tidak layu, dan bebas pestisida berbahaya?
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
        <Card className="border-2 border-green-900 bg-green-600 p-12">
          <CardContent className="flex items-center gap-16">
            <div className="flex h-40 w-40 items-center justify-center rounded-[24px] border-2 border-dashed border-green-600 bg-orange-50 text-green-600">
              <ImageUp size={60} />
            </div>
            <div className="flex h-40 flex-col items-start justify-between">
              <div>
                <h1 className="text-2xl-bold text-orange-50">
                  Upload Foto Produk
                </h1>
                <p className="text-md-medium text-orange-50">
                  Format PNG atau JPG. Maksimum 2MB.
                </p>
              </div>

              <Button className="rounded-[12px] border-2 border-green-800 bg-green-50 px-8 py-5 text-lg font-bold text-green-900">
                Pilih File
              </Button>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default Pertanyaan;
