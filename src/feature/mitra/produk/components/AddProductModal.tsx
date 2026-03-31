import { ScrollArea } from "@/shared/component/ui/scroll-area";
import { FormInputProduct } from "@/feature/mitra/produk/components/FormInputProduct";
import { Card, CardContent } from "@/shared/component/ui/card";
import { ImageUp } from "lucide-react";
import { Button } from "@/shared/component/ui/button";

const AddProductModal = () => {
  return (
    <ScrollArea
      type="always"
      className="max-h-[80vh] w-full overflow-hidden **:data-[slot=scroll-area-thumb]:bg-green-600 **:data-[slot=scroll-area-thumb]:hover:bg-green-700"
    >
      <div className="flex flex-col gap-3 rounded-b-[28px] bg-white px-4 py-6 md:gap-12 md:px-13">
        <div className="w-full">
          <FormInputProduct
            label={
              <p>
                Nama Produk <span className="text-orange-500">*</span>
              </p>
            }
            placeholder="Masukkan nama produk"
          />
        </div>
        <div className="flex w-full items-center gap-6">
          <FormInputProduct
            label={
              <p>
                Kategori <span className="text-orange-500">*</span>
              </p>
            }
            placeholder="Kategori"
          />
          <FormInputProduct
            label={
              <p>
                Unit <span className="text-orange-500">*</span>
              </p>
            }
            placeholder="Unit"
          />
        </div>
        <div className="flex w-full items-center gap-6">
          <FormInputProduct
            label={
              <p>
                Harga (Rp) <span className="text-orange-500">*</span>
              </p>
            }
            placeholder="Masukkan Harga"
          />
          <FormInputProduct
            label={
              <p>
                Stok <span className="text-orange-500">*</span>
              </p>
            }
            placeholder="Masukkan stok"
          />
        </div>
        <Card className="w-full border-2 border-green-900 bg-green-600 p-2 px-0 md:w-[70%] md:p-6">
          <CardContent className="flex items-center gap-4 md:gap-8">
            <div className="flex h-15 w-15 items-center justify-center rounded-lg border-2 border-dashed border-green-600 bg-orange-50 text-green-600 md:h-30 md:w-30 md:rounded-[24px]">
              <ImageUp className="h-8 w-8 md:h-15 md:w-15" />
            </div>
            <div className="flex h-15 flex-col items-start justify-between md:h-30">
              <div>
                <h1 className="text-[10px] font-bold text-orange-50 md:text-[14px]">
                  Upload Foto Produk
                </h1>
                <p className="text-[8px] font-medium text-orange-50 md:text-[10px]">
                  Format PNG atau JPG. Maksimum 2MB.
                </p>
              </div>

              <Button className="h-3 cursor-pointer rounded-lg border border-green-800 bg-green-50 px-2 py-2 text-[8px] font-bold text-green-900 transition-transform duration-200 hover:scale-105 md:h-6 md:rounded-[12px] md:border-2 md:px-4 md:py-4 md:text-[12px]">
                Pilih File
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-2 gap-6">
          <Button className="h-6 w-full cursor-pointer rounded-lg bg-green-500 py-2 text-[8px] font-bold text-orange-50 hover:scale-105 md:rounded-2xl md:py-6 md:text-[16px]">
            Simpan
          </Button>
          <Button className="h-6 w-full cursor-pointer rounded-lg border-2 border-green-100 bg-white py-2 text-[8px] font-bold text-green-700 hover:scale-105 md:rounded-2xl md:py-6 md:text-[16px]">
            Batal
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};

export default AddProductModal;
