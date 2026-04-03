"use client";

import { useState } from "react";
import { Pen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/shared/component/ui/dialog";
import EditProductModal from "@/feature/mitra/produk/components/EditProductModal";

const ProductEdit = () => {
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpenEdit(true)}
        className="cursor-pointer rounded-lg bg-orange-100 p-2 hover:scale-105"
      >
        <Pen className="h-2 w-2 text-orange-700 md:h-4 md:w-4" />
      </div>

      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogContent className="h-auto w-full gap-0 overflow-hidden rounded-[28px] border-none bg-transparent p-0 shadow-none md:max-w-[50%]">
          <DialogTitle className="m-0 rounded-t-[28px] bg-green-50 px-4 py-6 shadow-[0px_20px_10px_0px_black] md:px-13">
            <p className="text-[18px] font-bold text-green-700 md:text-3xl">
              Edit
            </p>
          </DialogTitle>
          <EditProductModal />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductEdit;
