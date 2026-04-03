"use client";

import { useState } from "react";
import ManajemenCard from "@/feature/cms/manajemen/components/ManajemenCard";
import type { cardType } from "@/feature/cms/manajemen/types/type";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/shared/component/ui/dialog";
import ManajemenModal from "@/feature/cms/manajemen/components/ManajemenModal";

type Props = {
  data: cardType[];
};

const AdminManajemenCardSection = ({ data }: Props) => {
  const [openScan, setOpenScan] = useState(false);

  return (
    <>
      <div className="grid w-full grid-cols-2 gap-4 md:gap-x-14 md:gap-y-16">
        {data.map((item) => (
          <ManajemenCard
            onBayar={() => setOpenScan(true)}
            data={item}
            key={item.id}
          />
        ))}
      </div>

      <Dialog open={openScan} onOpenChange={setOpenScan}>
        <DialogContent className="h-auto w-full gap-0 overflow-hidden rounded-[28px] border-none bg-transparent p-0 shadow-none md:max-w-[50%]">
          <DialogTitle className="m-0 flex flex-col gap-2 rounded-t-[28px] bg-green-50 px-4 py-6 shadow-[0px_20px_10px_0px_black] md:px-13">
            <p className="text-[18px] font-bold md:text-3xl">
              Tani Jaya Makmur
            </p>
            <p className="text-[8px] font-medium md:text-[16px]">SUP-101</p>
          </DialogTitle>
          <ManajemenModal />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminManajemenCardSection;
