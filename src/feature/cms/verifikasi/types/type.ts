export type VerifStatus = "Menunggu" | "Disetujui" | "Ditolak";

export type Verif = {
  supplierId: string;
  id: string;
  usaha: string;
  pemilik: string;
  tanggal: string;
  status: VerifStatus;
  rawStatus: "pending" | "approved" | "rejected";
  address: string;
  phone: string;
  categories: string[];
  sourceType: string;
};
