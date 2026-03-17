import { Card, CardContent, CardHeader } from "@/shared/component/ui/card";
import { Beef, ImageUp } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import { Input } from "@/shared/component/ui/input";

const PertanyaanDaging = () => {
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
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-orange-500"></div>
            <h3 className="text-2xl-medium text-green-900">Ayam</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-orange-500"></div>
            <h3 className="text-2xl-medium text-green-900">Sapi</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-white"></div>
            <h3 className="text-2xl-medium text-green-900">Ikan</h3>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl-bold text-green-900">
            2. Apakah daging berasal dari Rumah Potong Hewan (RPH / RPHU)?
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
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl-bold text-green-900">
            3. Nama RPH / RPHU asal produk?{" "}
            <span className="text-[#FF4747]">*</span>
          </h2>
          <Input
            className="rounded-[48px] bg-white px-4 py-6 ring-2 placeholder:font-medium placeholder:text-[#A7A7A7]"
            placeholder="Masukkan Nama RPH / RPHU"
          />
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl-bold text-green-900">
            4. Apakah unit usaha tersebut memiliki sertifikat Nomor Kontrol
            Veteriner (NKV)?
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
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl-bold text-green-900">
            5. Nomor sertifikat Nomor Kontrol Veteriner (NKV)? (
            <span className="text-orange-800">Jika diketahui</span> )
          </h2>
          <Input
            className="rounded-[48px] bg-white px-4 py-6 ring-2 placeholder:font-medium placeholder:text-[#A7A7A7]"
            placeholder="Masukkan sertifikat NKV"
          />
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl-bold text-green-900">
            6. Upload bukti asal produk (
            <span className="text-orange-800">pilih satu atau lebih</span>)
          </h2>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-orange-500"></div>
            <h3 className="text-2xl-medium text-green-900">
              Sertifikat Nomor Kontrol Veteriner (NKV)
            </h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-white"></div>
            <h3 className="text-2xl-medium text-green-900">
              Invoice pembelian
            </h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-white"></div>
            <h3 className="text-2xl-medium text-green-900">Surat kerja sama</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-white"></div>
            <h3 className="text-2xl-medium text-green-900">
              Foto label produk
            </h3>
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
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl-bold text-green-900">
            7. Apakah daging dalam kondisi segar saat dijual?
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
        <div className="flex w-[80%] flex-col gap-8">
          <h2 className="text-2xl-bold text-green-900">
            8. Apakah daging berwarna merah cerah, tidak berbau busuk, dan tidak
            terdapat darah pada permukaan?
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

export default PertanyaanDaging;
