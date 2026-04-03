"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { getSuppliers, verifySupplier } from "@/shared/repository/supplier-verification/action";
import type {
  ISupplierVerificationItemRaw,
  ISupplierVerificationQuery,
  IVerifySupplierRequest,
  SupplierVerifyStatus,
} from "@/shared/repository/supplier-verification/dto";
import type { Verif, VerifStatus } from "@/feature/cms/verifikasi/types/type";

const queryKey = {
  supplierVerification: (query?: ISupplierVerificationQuery) =>
    ["supplier-verification", query ?? {}] as const,
};

function formatDate(input?: string) {
  if (!input) return "-";

  const date = new Date(input);
  if (Number.isNaN(date.getTime())) {
    return input;
  }

  return date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function normalizeStatusLabel(status?: SupplierVerifyStatus): VerifStatus {
  if (status === "approved") return "Disetujui";
  if (status === "rejected") return "Ditolak";
  return "Menunggu";
}

function normalizeCategories(category?: string | string[]): string[] {
  if (Array.isArray(category)) return category;
  if (typeof category === "string" && category.trim()) {
    return category
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function mapSupplierToVerif(item: ISupplierVerificationItemRaw): Verif {
  return {
    supplierId: item.id,
    id: item.supplier_code || item.id,
    usaha: item.store_name || "-",
    pemilik: item.user?.name || "-",
    tanggal: formatDate(item.created_at),
    status: normalizeStatusLabel(item.status),
    rawStatus: item.status || "pending",
    address: item.address || item.user?.address || "-",
    phone: item.contact_number || "-",
    categories: normalizeCategories(item.category),
    sourceType: item.source_type || "-",
  };
}

export const useSupplierVerificationListQuery = (
  query?: ISupplierVerificationQuery,
) => {
  return useQuery<Verif[]>({
    queryKey: queryKey.supplierVerification(query),
    queryFn: async () => {
      const res = await getSuppliers(query);

      if (!res.success) {
        throw new Error(res.error || res.message);
      }

      if (!res.data?.success) {
        throw new Error(res.data?.message || "Data supplier tidak valid");
      }

      return (res.data.data || []).map(mapSupplierToVerif);
    },
  });
};

export const useVerifySupplierMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: IVerifySupplierRequest }) =>
      verifySupplier(id, payload),
    onSuccess: async (res) => {
      if (!res.success) {
        toast.error("Gagal memperbarui verifikasi", {
          description: res.error || res.message,
        });
        return;
      }

      if (!res.data?.success) {
        toast.error("Gagal memperbarui verifikasi", {
          description: res.data?.message || res.message,
        });
        return;
      }

      toast.success("Verifikasi berhasil diperbarui", {
        description: res.data.message || "Status supplier sudah diperbarui.",
      });

      await queryClient.invalidateQueries({
        queryKey: ["supplier-verification"],
      });
    },
    onError: (error) => {
      toast.error("Gagal memperbarui verifikasi", {
        description:
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan saat verifikasi supplier.",
      });
    },
  });
};
