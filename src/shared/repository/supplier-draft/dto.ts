import type {
  SupplierDraftSavePayload,
  SupplierDraftSubmitPayload,
} from "@/feature/auth/form/types/type";

export type ISupplierDraftSaveRequest = SupplierDraftSavePayload;
export type ISupplierDraftSubmitRequest = SupplierDraftSubmitPayload;

export interface ISupplierDraftResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

