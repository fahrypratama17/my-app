"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/shared/component/ui/dialog";
import DeleteProductModal from "@/feature/mitra/produk/components/DeleteProductModal";

const ProductDelete = () => {
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpenDelete(true)}
        className="cursor-pointer rounded-lg bg-[#FFE2E2] p-2 hover:scale-105"
      >
        <Trash2 className="h-2 w-2 text-[#FF4747] md:h-4 md:w-4" />
      </div>

      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogContent className="h-auto w-full gap-0 overflow-hidden rounded-[28px] border-none bg-transparent p-0 shadow-none md:max-w-[50%]">
          <DialogTitle className="sr-only">
            <p>Hapus</p>
          </DialogTitle>
          <DeleteProductModal />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductDelete;
