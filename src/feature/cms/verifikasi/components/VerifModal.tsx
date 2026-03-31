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
import { Button } from "@/shared/component/ui/button";

const VerifModal = () => {
  return (
    <ScrollArea
      type="always"
      className="max-h-[80vh] w-full overflow-hidden **:data-[slot=scroll-area-thumb]:bg-green-600 **:data-[slot=scroll-area-thumb]:hover:bg-green-700"
    >
      <div className="flex flex-col gap-3 rounded-b-[28px] bg-white px-4 py-6 md:gap-15 md:px-13">
        <Card className="mt-4 bg-green-50 px-4 md:mt-8 md:px-16 md:py-4">
          <p className="text-[10px] font-bold text-green-700 md:text-xl">
            Informasi Bisnis
          </p>
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex items-center gap-20 md:gap-50">
              <div className="flex items-center gap-2.5">
                <Store className="h-3 w-3 text-green-800 md:h-6 md:w-6" />
                <div>
                  <p className="text-[8px] font-bold text-green-200 md:text-sm md:text-[10px]">
                    Nama Usaha
                  </p>
                  <p className="text-[8px] font-bold text-green-900 md:text-sm">
                    Kebun Nusantara
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <User className="h-3 w-3 text-green-800 md:h-6 md:w-6" />
                <div>
                  <p className="text-[8px] font-bold text-green-200 md:text-sm">
                    Pemilik
                  </p>
                  <p className="text-[8px] font-bold text-green-900 md:text-sm">
                    Siti Rahayu
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-20 md:gap-50">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-3 w-3 text-green-800 md:h-6 md:w-6" />
                <div>
                  <p className="text-[8px] font-bold text-green-200 md:text-sm">
                    Alamat
                  </p>
                  <p className="text-[8px] font-bold text-green-900 md:text-sm">
                    Jl. Veteran No. 15
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-3 w-3 text-green-800 md:h-6 md:w-6" />
                <div>
                  <p className="text-[8px] font-bold text-green-200 md:text-sm">
                    No HP
                  </p>
                  <p className="text-[8px] font-bold text-green-900 md:text-sm">
                    +62 859467 342
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div className="flex flex-col gap-4">
          <p className="text-[10px] font-bold text-green-700 md:text-xl">
            Kategori & Sumber
          </p>
          <div className="flex gap-2 md:gap-4">
            <p className="rounded-[20px] border border-black bg-orange-50 p-1 px-4 text-[8px] font-medium md:text-sm">
              Sayur
            </p>
            <p className="md:text-s rounded-[20px] border border-black bg-orange-50 p-1 px-4 text-[8px] font-medium">
              Buah
            </p>
          </div>
          <p className="text-[8px] font-semibold text-green-200 md:text-sm">
            Sumber: <span className="text-green-900">Petani Lokal</span>
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[10px] font-bold text-green-700 md:text-xl">
            Deskripsi Usaha
          </p>
          <p className="w-[80%] text-[8px] font-semibold text-green-200 md:w-full md:text-sm">
            Kami adalah petani lokal yang menanam sayur organik dan buah-buahan
            segar di area Malang Raya sejak 2018.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[10px] font-bold text-green-700 md:text-xl">
            Dokumen yang Diunggah
          </p>
          <div className="flex items-center gap-4 rounded-[8px] border border-green-500 p-2 md:rounded-[12px] md:p-4">
            <File className="h-3 w-3 text-green-200 md:h-6 md:w-6" />
            <p className="text-[8px] font-semibold text-green-900 md:text-sm">
              Foto Produk
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <Button className="flex h-4 w-full cursor-pointer items-center justify-center gap-4 rounded-[12px] bg-green-50 p-4 hover:scale-105 md:gap-8 md:py-6">
            <p className="text-[10px] font-bold text-green-700 md:text-xl">
              Setujui Mitra
            </p>
            <CircleCheck className="h-3 w-3 text-green-700 md:h-6 md:w-6" />
          </Button>
          <Button className="flex h-4 w-full cursor-pointer items-center justify-center gap-4 rounded-[12px] bg-[#FFE2E2] p-4 hover:scale-105 md:gap-8 md:py-6">
            <p className="text-[10px] font-bold text-[#FF4747] md:text-xl">
              Tolak Supplier
            </p>
            <CircleX className="h-3 w-3 text-[#FF4747] md:h-6 md:w-6" />
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};

export default VerifModal;
