"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/shared/component/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/component/ui/dropdown-menu";
import { Button } from "@/shared/component/ui/button";
import { useDebounce } from "@/hooks/use-debounce";
import { toast } from "sonner";
import AdminVerifikasi from "@/feature/cms/verifikasi/components/AdminVerifikasi";
import { useSupplierVerificationListQuery } from "@/shared/repository/supplier-verification/query";
import type { SupplierVerifyStatus } from "@/shared/repository/supplier-verification/dto";

type StatusFilter = "all" | SupplierVerifyStatus;

const statusLabelMap: Record<StatusFilter, string> = {
  all: "Semua",
  pending: "Menunggu",
  approved: "Disetujui",
  rejected: "Ditolak",
};

const AdminVerifikasiData = () => {
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");

  const debouncedKeyword = useDebounce(keyword, 400);

  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useSupplierVerificationListQuery({
    keyword: debouncedKeyword.trim() || undefined,
    status: status === "all" ? undefined : status,
  });

  useEffect(() => {
    if (!isError) return;

    toast.error("Gagal mengambil data verifikasi", {
      description:
        error instanceof Error
          ? error.message
          : "Silakan coba lagi dalam beberapa saat.",
    });
  }, [isError, error]);

  return (
    <>
      <div className="grid w-full grid-cols-[2fr_0.6fr] gap-6">
        <div className="relative w-full">
          <Input
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            className="peer border-2 border-green-900 bg-white py-1 text-[8px] transition-all duration-200 placeholder:text-[8px] placeholder:text-[#A7A7A7] placeholder-shown:px-10 active:ring-2 md:py-5 md:text-lg md:placeholder:text-lg md:placeholder:font-medium"
            placeholder="Cari Nama Usaha atau Pemilik"
          />

          <Search className="pointer-events-none absolute top-1 left-3 p-1 text-[#A7A7A7] opacity-0 transition-opacity peer-placeholder-shown:opacity-100 md:top-2.5 md:p-0" />
        </div>
        <div className="w-full">
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="flex items-center justify-between"
            >
              <Button className="flex h-full w-full items-center justify-between border-2 border-green-900 bg-transparent text-[#A7A7A7]">
                <p>{statusLabelMap[status]}</p>
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => setStatus("all")}>
                  Semua
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatus("pending")}>
                  Menunggu
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatus("approved")}>
                  Disetujui
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatus("rejected")}>
                  Ditolak
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <AdminVerifikasi data={data} isLoading={isLoading} />
    </>
  );
};

export default AdminVerifikasiData;
