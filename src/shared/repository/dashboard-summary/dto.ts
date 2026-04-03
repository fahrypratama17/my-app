export interface IDashboardSummary {
  total_supplier: number;
  supplier_pending: number;
  supplier_approved: number;
  supplier_rejected: number;
  total_sppg: number;
  total_order: number;
  order_pending: number;
  order_processing: number;
  order_shipped: number;
  order_completed: number;
  order_cancelled: number;
}

export interface IDashboardSummaryResponse {
  success: boolean;
  message: string;
  data: IDashboardSummary;
}

