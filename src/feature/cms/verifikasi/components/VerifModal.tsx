"use client";

import { useMemo } from "react";
import { Card } from "@/shared/component/ui/card";
import {
  Store,
  User,
  MapPin,
  Phone,
  CircleCheck,
  CircleX,
  Tag,
} from "lucide-react";
import { ScrollArea } from "@/shared/component/ui/scroll-area";
import { Button } from "@/shared/component/ui/button";
import type { Verif } from "@/feature/cms/verifikasi/types/type";

type Props = {
  supplier: Verif | null;
  isSubmitting?: boolean;
  onSubmit: (payload: {
    status: "approved" | "rejected";
    admin_notes?: string;
  }) => void;
};

const VerifModal = ({ supplier, onSubmit, isSubmitting = false }: Props) => {
  const adminNotes = "";

  const categoryLabel = useMemo(() => {
    if (!supplier?.categories?.length) return "-";
    return supplier.categories.join(", ");
  }, [supplier]);

  const handleSubmit = (status: "approved" | "rejected") => {
    const notes = adminNotes.trim();
    onSubmit({
      status,
      admin_notes: notes.length > 0 ? notes : undefined,
    });
  };

  if (!supplier) {
    return (
      <div className="rounded-b-[28px] bg-white px-4 py-10 text-center text-sm font-semibold text-green-900 md:px-13">
        Data supplier tidak tersedia.
      </div>
    );
  }

  return (
    <ScrollArea
      type="always"
      className="max-h-[80vh] w-full overflow-hidden **:data-[slot=scroll-area-thumb]:bg-green-600 **:data-[slot=scroll-area-thumb]:hover:bg-green-700"
    >
      <div className="flex flex-col gap-3 rounded-b-[28px] bg-white px-4 py-6 md:gap-10 md:px-13">
        <Card className="mt-4 bg-green-50 px-4 md:mt-8 md:px-16 md:py-4">
          <p className="text-[10px] font-bold text-green-700 md:text-xl">
            Informasi Bisnis
          </p>
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 md:gap-x-36 md:gap-y-8">
            <div className="flex items-center gap-2.5">
              <Store className="h-3 w-3 text-green-800 md:h-6 md:w-6" />
              <div>
                <p className="text-[8px] font-bold text-green-200 md:text-sm">
                  Nama Usaha
                </p>
                <p className="text-[8px] font-bold text-green-900 md:text-sm">
                  {supplier.usaha}
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
                  {supplier.pemilik}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="h-3 w-3 text-green-800 md:h-6 md:w-6" />
              <div>
                <p className="text-[8px] font-bold text-green-200 md:text-sm">
                  Alamat
                </p>
                <p className="text-[8px] font-bold text-green-900 md:text-sm">
                  {supplier.address}
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
                  {supplier.phone}
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex flex-col gap-4">
          <p className="text-[10px] font-bold text-green-700 md:text-xl">
            Kategori & Sumber
          </p>
          <div className="flex items-center gap-2">
            <Tag className="h-3 w-3 text-green-700 md:h-5 md:w-5" />
            <p className="text-[8px] font-semibold text-green-900 md:text-sm">
              {categoryLabel}
            </p>
          </div>
          <p className="text-[8px] font-semibold text-green-200 md:text-sm">
            Sumber:{" "}
            <span className="text-green-900">{supplier.sourceType}</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <Button
            onClick={() => handleSubmit("approved")}
            disabled={isSubmitting}
            className="flex h-4 w-full cursor-pointer items-center justify-center gap-4 rounded-[12px] bg-green-50 p-4 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70 md:gap-8 md:py-6"
          >
            <p className="text-[10px] font-bold text-green-700 md:text-xl">
              Setujui Mitra
            </p>
            <CircleCheck className="h-3 w-3 text-green-700 md:h-6 md:w-6" />
          </Button>
          <Button
            onClick={() => handleSubmit("rejected")}
            disabled={isSubmitting}
            className="flex h-4 w-full cursor-pointer items-center justify-center gap-4 rounded-[12px] bg-[#FFE2E2] p-4 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70 md:gap-8 md:py-6"
          >
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
