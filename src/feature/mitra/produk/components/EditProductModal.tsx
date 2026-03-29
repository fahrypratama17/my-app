import { ScrollArea } from "@/shared/component/ui/scroll-area";
import { FormInputProduct } from "@/feature/mitra/produk/components/FormInputProduct";
import { Card, CardContent } from "@/shared/component/ui/card";
import { ImageUp } from "lucide-react";
import { Button } from "@/shared/component/ui/button";

const EditProductModal = () => {
  return (
    <ScrollArea
      type="always"
      className="max-h-[80vh] w-full overflow-hidden **:data-[slot=scroll-area-thumb]:bg-green-600 **:data-[slot=scroll-area-thumb]:hover:bg-green-700"
    >
      <div className="flex flex-col gap-12 rounded-b-[28px] bg-white px-13 py-6">
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
        <Card className="w-[70%] border-2 border-green-900 bg-green-600 p-2 px-0 md:p-6">
          <CardContent className="flex items-center gap-4 md:gap-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-[24px] border-2 border-dashed border-green-600 bg-orange-50 text-green-600 md:h-30 md:w-30">
              <ImageUp className="h-8 w-8 md:h-15 md:w-15" />
            </div>
            <div className="flex h-10 flex-col items-start justify-between md:h-30">
              <div>
                <h1 className="text-[10px] font-bold text-orange-50 md:text-[14px]">
                  Upload Foto Produk
                </h1>
                <p className="text-[8px] font-medium text-orange-50 md:text-[10px]">
                  Format PNG atau JPG. Maksimum 2MB.
                </p>
              </div>

              <Button className="h-6 cursor-pointer rounded-[8px] border border-green-800 bg-green-50 px-4 text-[8px] font-bold text-green-900 transition-transform duration-200 hover:scale-105 md:rounded-[12px] md:border-2 md:px-4 md:py-4 md:text-[12px]">
                Pilih File
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-2 gap-6">
          <Button className="text-md w-full cursor-pointer bg-green-500 py-6 font-bold text-orange-50 hover:scale-105">
            Simpan
          </Button>
          <Button className="text-md w-full cursor-pointer border-2 border-green-100 bg-white py-6 font-bold text-green-700 hover:scale-105">
            Batal
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};

export default EditProductModal;
