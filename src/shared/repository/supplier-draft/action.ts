import { apiFetch } from "@/shared/lib/api/fetcher";
import type {
  ISupplierDraftResponse,
  ISupplierDraftSaveRequest,
  ISupplierDraftSubmitRequest,
} from "@/shared/repository/supplier-draft/dto";

export async function saveSupplierDraft(payload: ISupplierDraftSaveRequest) {
  return apiFetch<ISupplierDraftResponse>({
    url: "/api/protected/supplier-draft/save",
    options: {
      method: "POST",
      body: JSON.stringify(payload),
    },
    errorMessage: "Gagal menyimpan draft supplier",
    successMessage: "Draft supplier berhasil disimpan",
  });
}

export async function submitSupplierDraft(payload: ISupplierDraftSubmitRequest) {
  return apiFetch<ISupplierDraftResponse>({
    url: "/api/protected/supplier-draft/submit",
    options: {
      method: "POST",
      body: JSON.stringify(payload),
    },
    errorMessage: "Gagal submit pendaftaran supplier",
    successMessage: "Pendaftaran supplier berhasil disubmit",
  });
}

