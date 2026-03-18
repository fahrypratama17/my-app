import { Card, CardContent } from "@/shared/component/ui/card";
import { ImageUp } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import { Input } from "@/shared/component/ui/input";

const PertanyaanSusu = () => {
  return (
    <section className="bg-green-50 pb-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl-bold text-green-900">
            2. Jenis susu yang dijual?
          </h2>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-orange-500"></div>
            <h3 className="text-2xl-medium text-green-900">Susu segar</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-white"></div>
            <h3 className="text-2xl-medium text-green-900">
              Susu pasteurisasi
            </h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-white"></div>
            <h3 className="text-2xl-medium text-green-900">Susu UHT</h3>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl-bold text-green-900">3. Asal susu?</h2>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-orange-500"></div>
            <h3 className="text-2xl-medium text-green-900">
              Peternakan sapi perah
            </h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-white"></div>
            <h3 className="text-2xl-medium text-green-900">Koperasi susu</h3>
          </div>
          <div className="flex items-center gap-8">
            <div className="h-8 w-8 rounded-full border-2 border-green-900 bg-white"></div>
            <h3 className="text-2xl-medium text-green-900">Distributor</h3>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl-bold text-green-900">
            4. Nama unit usaha asal susu?{" "}
            <span className="text-[#FF4747]">*</span>
          </h2>
          <Input
            className="rounded-[48px] bg-white px-4 py-6 ring-2 placeholder:font-medium placeholder:text-[#A7A7A7]"
            placeholder="Masukkan Nama Peternakan"
          />
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl-bold text-green-900">
            5. Apakah unit usaha tersebut memiliki sertifikat Nomor Kontrol
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
            6. Nomor sertifikat Nomor Kontrol Veteriner (NKV)? (
            <span className="text-orange-800">Jika diketahui</span> )
          </h2>
          <Input
            className="rounded-[48px] bg-white px-4 py-6 ring-2 placeholder:font-medium placeholder:text-[#A7A7A7]"
            placeholder="Masukkan sertifikat NKV"
          />
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl-bold text-green-900">
            7. Upload bukti asal produk (
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
            8. Apakah susu tanpa tambahan gula, kemasan tidak rusak, dan
            disimpan sesuai suhu yang dianjurkan?
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
      </div>
    </section>
  );
};

export default PertanyaanSusu;
