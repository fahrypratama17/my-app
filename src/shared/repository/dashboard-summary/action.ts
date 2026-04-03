import { apiFetch } from "@/shared/lib/api/fetcher";
import type { IDashboardSummaryResponse } from "@/shared/repository/dashboard-summary/dto";

export async function getDashboardSummary() {
  return apiFetch<IDashboardSummaryResponse>({
    url: "/api/protected/dashboard/summary",
    options: { method: "GET" },
    errorMessage: "Gagal mengambil ringkasan dashboard",
  });
}
