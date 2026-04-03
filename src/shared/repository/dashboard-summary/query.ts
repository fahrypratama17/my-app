"use client";

import { useQuery } from "@tanstack/react-query";
import { getDashboardSummary } from "@/shared/repository/dashboard-summary/action";
import type { IDashboardSummary } from "@/shared/repository/dashboard-summary/dto";

const queryKey = {
  dashboardSummary: ["dashboard-summary"],
};

export const useDashboardSummaryQuery = () => {
  return useQuery<IDashboardSummary>({
    queryKey: queryKey.dashboardSummary,
    retry: (failureCount, error) => {
      if (error instanceof Error && /401|unauthorized/i.test(error.message)) {
        return false;
      }

      return failureCount < 2;
    },
    queryFn: async () => {
      const res = await getDashboardSummary();

      if (!res.success) {
        throw new Error(res.error || res.message);
      }

      if (!res.data.success || !res.data.data) {
        throw new Error(res.data.message || "Data ringkasan dashboard tidak valid");
      }

      return res.data.data;
    },
  });
};

