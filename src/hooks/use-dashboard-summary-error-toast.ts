"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export function useDashboardSummaryErrorToast(
  isError: boolean,
  error: Error | null,
) {
  useEffect(() => {
    if (!isError) {
      return;
    }

    toast.error("Gagal mengambil ringkasan dashboard", {
      description: error?.message || "Silakan coba lagi dalam beberapa saat.",
    });
  }, [isError, error]);
}

