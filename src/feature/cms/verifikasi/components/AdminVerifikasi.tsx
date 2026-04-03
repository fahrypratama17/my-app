"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/shared/component/ui/button";
import VerificationTable from "@/feature/cms/verifikasi/components/VerificationTable";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/shared/component/ui/dialog";
import VerifModal from "@/feature/cms/verifikasi/components/VerifModal";
import VerifikasiCardMobile from "@/feature/cms/verifikasi/components/VerifikasiCardMobile";
import type { Verif } from "@/feature/cms/verifikasi/types/type";
import { useVerifySupplierMutation } from "@/shared/repository/supplier-verification/query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/component/ui/table";

type Props = {
  data: Verif[];
  isLoading?: boolean;
};

const ITEMS_PER_PAGE = 6;

const MobileVerificationSkeleton = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-4 md:hidden">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={`mobile-verif-skeleton-${index}`}
          className="h-36 animate-pulse rounded-lg border border-green-900 bg-green-50"
        />
      ))}
    </div>
  );
};

const DesktopVerificationSkeleton = () => {
  return (
    <div className="hidden md:block">
      <Table className="w-full table-fixed">
        <TableHeader className="border">
          <TableRow>
            {Array.from({ length: 6 }).map((_, index) => (
              <TableHead
                key={`desktop-verif-head-skeleton-${index}`}
                className="border border-green-900 bg-green-50"
              >
                <div className="h-5 w-full animate-pulse rounded bg-green-200" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, rowIndex) => (
            <TableRow key={`desktop-verif-row-skeleton-${rowIndex}`}>
              {Array.from({ length: 6 }).map((__, colIndex) => (
                <TableCell
                  key={`desktop-verif-cell-skeleton-${rowIndex}-${colIndex}`}
                  className="border border-green-900 bg-green-50"
                >
                  <div className="h-4 w-full animate-pulse rounded bg-green-200" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const AdminVerifikasi = ({ data, isLoading = false }: Props) => {
  const [openScan, setOpenScan] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSupplier, setSelectedSupplier] = useState<Verif | null>(null);

  const { mutate: mutateVerify, isPending } = useVerifySupplierMutation();

  const totalPages = Math.max(1, Math.ceil(data.length / ITEMS_PER_PAGE));
  const paginatedData = useMemo(
    () =>
      data.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE,
      ),
    [currentPage, data],
  );

  const handleDetail = (supplier: Verif) => {
    setSelectedSupplier(supplier);
    setOpenScan(true);
  };

  const handleSubmitVerify = (payload: {
    status: "approved" | "rejected";
    admin_notes?: string;
  }) => {
    if (!selectedSupplier) return;

    mutateVerify(
      {
        id: selectedSupplier.supplierId,
        payload,
      },
      {
        onSuccess: (res) => {
          if (res.success && res.data?.success) {
            setOpenScan(false);
            setSelectedSupplier(null);
          }
        },
      },
    );
  };

  return (
    <>
      {isLoading ? (
        <>
          <MobileVerificationSkeleton />
          <DesktopVerificationSkeleton />
        </>
      ) : (
        <>
          <div className="grid w-full grid-cols-2 gap-4 md:hidden">
            <VerifikasiCardMobile
              data={paginatedData}
              onDetail={handleDetail}
            />
          </div>
          <div className="mx-auto flex items-center justify-center gap-2 md:hidden">
            <Button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              <ChevronLeft />
            </Button>

            <p className="text-[10px] font-bold text-green-800">
              {currentPage} / {totalPages}
            </p>

            <Button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="text-[10px]"
            >
              <ChevronRight />
            </Button>
          </div>

          {data.length === 0 ? (
            <div className="w-full rounded-2xl border-2 border-dashed border-green-900 bg-green-50 p-8 text-center text-sm font-semibold text-green-900 md:text-lg">
              Belum ada data supplier sesuai filter.
            </div>
          ) : (
            <VerificationTable data={data} onDetail={handleDetail} />
          )}
        </>
      )}

      <Dialog
        open={openScan}
        onOpenChange={(open) => {
          setOpenScan(open);
          if (!open) {
            setSelectedSupplier(null);
          }
        }}
      >
        <DialogContent className="h-auto w-full gap-0 overflow-hidden rounded-[28px] border-none bg-transparent p-0 shadow-none md:max-w-[50%]">
          <DialogTitle className="m-0 flex flex-col gap-2 rounded-t-[28px] bg-green-50 px-4 py-6 shadow-[0px_20px_10px_0px_black] md:px-13">
            <p className="text-[18px] font-bold md:text-3xl">
              Detail Verifikasi
            </p>
            <p className="text-[8px] font-medium md:text-[16px]">
              {selectedSupplier?.id || "-"}
            </p>
          </DialogTitle>
          <VerifModal
            key={selectedSupplier?.supplierId || "empty-supplier"}
            supplier={selectedSupplier}
            isSubmitting={isPending}
            onSubmit={handleSubmitVerify}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminVerifikasi;
