import { apiFetch } from "@/shared/lib/api/fetcher";
import type { TAPIQuery } from "@/shared/types/api/TAPI-query";
import type {
  IGetSuppliersResponse,
  ISupplierVerificationQuery,
  IVerifySupplierRequest,
  IVerifySupplierResponse,
} from "@/shared/repository/supplier-verification/dto";

function toApiQuery(query?: ISupplierVerificationQuery): TAPIQuery | undefined {
  if (!query) return undefined;

  return {
    keyword: query.keyword,
    category: query.category,
    status: query.status,
  };
}

export async function getSuppliers(query?: ISupplierVerificationQuery) {
  return apiFetch<IGetSuppliersResponse>({
    url: "/api/protected/suppliers",
    query: toApiQuery(query),
    options: { method: "GET" },
    errorMessage: "Gagal mengambil data supplier",
  });
}

export async function verifySupplier(
  id: string,
  payload: IVerifySupplierRequest,
) {
  return apiFetch<IVerifySupplierResponse>({
    url: `/api/protected/suppliers/${id}/verify`,
    options: {
      method: "PATCH",
      body: JSON.stringify(payload),
    },
    errorMessage: "Gagal memverifikasi supplier",
  });
}
