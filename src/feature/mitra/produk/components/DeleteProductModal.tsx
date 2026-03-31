import { CircleAlert } from "lucide-react";
import { Button } from "@/shared/component/ui/button";

const DeleteProductModal = () => {
  return (
    <div className="flex flex-col gap-7 rounded-[28px] bg-white px-6 py-12 md:gap-12 md:px-13">
      <div className="mx-auto rounded-[24px] bg-[#FFE2E2] p-6 md:rounded-[48px] md:p-8">
        <CircleAlert className="h-15 w-15 text-[#FF4747] md:h-20 md:w-20" />
      </div>
      <div className="mx-auto flex flex-col gap-2.5 text-center">
        <p className="text-lg font-bold text-green-700 md:text-3xl">
          Hapus Produk?
        </p>
        <p className="mx-auto w-[80%] text-[10px] font-medium text-green-400 md:w-[70%] md:text-sm">
          Produk ini akan dihapus secara permanen dan tidak bisa dikembalikan.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Button className="text-md w-full cursor-pointer rounded-[8px] bg-green-500 py-5 font-bold text-orange-50 hover:scale-105 md:rounded-2xl md:py-6">
          Hapus
        </Button>
        <Button className="text-md w-full cursor-pointer rounded-[8px] border-2 border-green-100 bg-white py-5 font-bold text-green-700 hover:scale-105 md:rounded-2xl md:py-6">
          Batal
        </Button>
      </div>
    </div>
  );
};

export default DeleteProductModal;
