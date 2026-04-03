"use client";

import ScanModal from "@/feature/sppg/cari/components/ScanModal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/shared/component/ui/dialog";
import { useDetailSupplierSectionContext } from "@/feature/sppg/detail/components/DetailSupplierSectionProvider";

const DetailSupplierScanDialog = () => {
  const { openScan, setOpenScan } = useDetailSupplierSectionContext();

  return (
    <Dialog open={openScan} onOpenChange={setOpenScan}>
      <DialogContent className="mx-auto h-auto rounded-[28px] border-none bg-transparent p-0 shadow-none md:w-full md:max-w-[30%]">
        <DialogTitle className="sr-only">Payment QRIS</DialogTitle>
        <ScanModal />
      </DialogContent>
    </Dialog>
  );
};

export default DetailSupplierScanDialog;
