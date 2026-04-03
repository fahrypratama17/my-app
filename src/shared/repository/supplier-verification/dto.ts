export type SupplierVerifyStatus = "pending" | "approved" | "rejected";

export interface ISupplierVerificationQuery {
  keyword?: string;
  category?: string;
  status?: SupplierVerifyStatus;
}

export interface ISupplierVerificationItemRaw {
  id: string;
  supplier_code?: string;
  store_name?: string;
  address?: string;
  contact_number?: string;
  category?: string | string[];
  source_type?: string;
  created_at?: string;
  status?: SupplierVerifyStatus;
  user?: {
    name?: string;
    email?: string;
    address?: string;
  };
}

export interface IGetSuppliersResponse {
  success: boolean;
  message: string;
  data: ISupplierVerificationItemRaw[];
}

export interface IVerifySupplierRequest {
  status: Extract<SupplierVerifyStatus, "approved" | "rejected">;
  admin_notes?: string;
}

export interface IVerifySupplierResponse {
  success: boolean;
  message: string;
}
