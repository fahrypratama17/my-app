import { CircleAlert } from "lucide-react";
import { Button } from "@/shared/component/ui/button";

const DeleteProductModal = () => {
  return (
    <div className="flex flex-col gap-12 rounded-[28px] bg-white px-13 py-12">
      <div className="mx-auto rounded-[48px] bg-[#FFE2E2] p-8">
        <CircleAlert className="h-20 w-20 text-[#FF4747]" />
      </div>
      <div className="mx-auto flex flex-col gap-2.5 text-center">
        <p className="text-3xl font-bold text-green-700">Hapus Produk?</p>
        <p className="mx-auto w-[70%] text-sm font-medium text-green-400">
          Produk ini akan dihapus secara permanen dan tidak bisa dikembalikan.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Button className="text-md w-full cursor-pointer bg-green-500 py-6 font-bold text-orange-50 hover:scale-105">
          Hapus
        </Button>
        <Button className="text-md w-full cursor-pointer border-2 border-green-100 bg-white py-6 font-bold text-green-700 hover:scale-105">
          Batal
        </Button>
      </div>
    </div>
  );
};

export default DeleteProductModal;
