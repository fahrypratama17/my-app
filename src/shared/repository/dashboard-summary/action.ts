import type { ApiResponse } from "@/shared/types/api/API-response";
import type { IDashboardSummaryResponse } from "@/shared/repository/dashboard-summary/dto";

const API_URL = "https://be-internship.bccdev.id/hanif/api/v1";

export async function getDashboardSummary() {
  try {
    const response = await fetch(`${API_URL}/dashboard/summary`, {
      method: "GET",
    });

    const raw = (await response.json().catch(() => null)) as unknown;

    if (!response.ok) {
      const message =
        typeof raw === "object" &&
        raw !== null &&
        "message" in raw &&
        typeof raw.message === "string"
          ? raw.message
          : "Gagal mengambil ringkasan dashboard";

      return {
        success: false,
        error: message,
        message,
      } as ApiResponse<IDashboardSummaryResponse>;
    }

    return {
      success: true,
      data: raw as IDashboardSummaryResponse,
      message:
        typeof raw === "object" &&
        raw !== null &&
        "message" in raw &&
        typeof raw.message === "string"
          ? raw.message
          : "Success",
    } as ApiResponse<IDashboardSummaryResponse>;
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Terjadi kesalahan saat mengambil ringkasan dashboard";

    return {
      success: false,
      error: message,
      message,
    } as ApiResponse<IDashboardSummaryResponse>;
  }
}
