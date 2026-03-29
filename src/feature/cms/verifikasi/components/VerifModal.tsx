import { Card } from "@/shared/component/ui/card";
import {
  Store,
  User,
  MapPin,
  Phone,
  File,
  CircleCheck,
  CircleX,
} from "lucide-react";
import { ScrollArea } from "@/shared/component/ui/scroll-area";

const VerifModal = () => {
  return (
    <ScrollArea
      type="always"
      className="max-h-[80vh] w-full overflow-hidden **:data-[slot=scroll-area-thumb]:bg-green-600 **:data-[slot=scroll-area-thumb]:hover:bg-green-700"
    >
      <div className="flex flex-col gap-15 rounded-b-[28px] bg-white px-13 py-6">
        <Card className="mt-8 bg-green-50 px-16 py-4">
          <p className="text-xl font-bold text-green-700">Informasi Bisnis</p>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-50">
              <div className="flex items-center gap-2.5">
                <Store className="text-green-800" />
                <div>
                  <p className="text-sm font-bold text-green-200">Nama Usaha</p>
                  <p className="text-sm font-bold text-green-900">
                    Kebun Nusantara
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <User className="text-green-800" />
                <div>
                  <p className="text-sm font-bold text-green-200">Pemilik</p>
                  <p className="text-sm font-bold text-green-900">
                    Siti Rahayu
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-50">
              <div className="flex items-center gap-2.5">
                <MapPin className="text-green-800" />
                <div>
                  <p className="text-sm font-bold text-green-200">Alamat</p>
                  <p className="text-sm font-bold text-green-900">
                    Jl. Veteran No. 15
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="text-green-800" />
                <div>
                  <p className="text-sm font-bold text-green-200">No HP</p>
                  <p className="text-sm font-bold text-green-900">
                    +62 859467 342
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold text-green-700">Kategori & Sumber</p>
          <div className="flex gap-4">
            <p className="rounded-[20px] border border-black bg-orange-50 p-1 px-4">
              Sayur
            </p>
            <p className="rounded-[20px] border border-black bg-orange-50 p-1 px-4">
              Buah
            </p>
          </div>
          <p className="text-sm font-semibold text-green-200">
            Sumber: <span className="text-green-900">Petani Lokal</span>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xl font-bold text-green-700">Deskripsi Usaha</p>
          <p className="text-sm font-semibold text-green-200">
            Kami adalah petani lokal yang menanam sayur organik dan buah-buahan
            segar di area Malang Raya sejak 2018.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold text-green-700">
            Dokumen yang Diunggah
          </p>
          <div className="flex items-center gap-4 rounded-[12px] border border-green-500 p-4">
            <File className="text-green-200" />
            <p className="text-sm font-semibold text-green-900">Foto Produk</p>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex w-full items-center justify-center gap-8 rounded-[12px] bg-green-50 p-4">
            <p className="text-xl font-bold text-green-700">Setujui Mitra</p>
            <CircleCheck className="text-xl font-bold text-green-700" />
          </div>
          <div className="flex w-full items-center justify-center gap-8 rounded-[12px] bg-[#FFE2E2] p-4">
            <p className="text-xl font-bold text-[#FF4747]">Tolak Supplier</p>
            <CircleX className="text-xl font-bold text-[#FF4747]" />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default VerifModal;
