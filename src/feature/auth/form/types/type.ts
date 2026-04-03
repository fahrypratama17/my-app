import { z } from "zod";

export const identitasSchema = z.object({
  store_name: z.string().trim().min(1, "Nama usaha wajib diisi"),
  owner_name: z.string().trim().min(1, "Nama pemilik wajib diisi"),
  address: z.string().trim().min(1, "Alamat usaha wajib diisi"),
  contact_number: z.string().trim().min(1, "No HP aktif wajib diisi"),
});

export const dagingSchema = z.object({
  jenisDaging: z.enum(["ayam", "sapi", "ikan"]).optional(),
  RPH: z.enum(["ya", "tidak"]).optional(),
  namaRPH: z.string().min(1, "Nama RPH wajib diisi").optional(),
  NKV: z.enum(["ya", "tidak"]).optional(),
  nomorNKV: z.string().min(1, "Nomor NKV wajib diisi").optional(),
  uploadBukti: z.array(z.enum(["NKV", "invoice", "sks", "fotlab"])),
  dagingSegar: z.enum(["ya", "tidak"]).optional(),
  dagingAman: z.enum(["ya", "tidak"]).optional(),
  ciriIkan: z.enum(["ya", "tidak"]).optional(),
}).superRefine((data, ctx) => {
  if (data.RPH === "ya" && !data.namaRPH?.trim()) {
    ctx.addIssue({
      code: "custom",
      path: ["namaRPH"],
      message: "Nama RPH wajib diisi",
    });
  }

  if (data.NKV === "ya" && !data.nomorNKV?.trim()) {
    ctx.addIssue({
      code: "custom",
      path: ["nomorNKV"],
      message: "Nomor NKV wajib diisi",
    });
  }
});

export const sayurSchema = z.object({
  asalSayur: z.enum(["petani", "distributor", "kebun"]).optional(),
  sayurSegar: z.enum(["ya", "tidak"]).optional(),
});

export const buahSchema = z.object({
  asalBuah: z.enum(["petani", "distributor", "kebun"]).optional(),
  buahSegar: z.enum(["ya", "tidak"]).optional(),
});

export const ternakSchema = z.object({
  jenisTernak: z.enum(["susu", "telur"]).optional(),
  sumberTelur: z.enum(["sendiri", "lokal", "distributor"]).optional(),
  namaPeternakan: z.string().min(1, "Nama peternakan wajib diisi").optional(),
  telurAman: z.enum(["ya", "tidak"]).optional(),
  jenisSusu: z.enum(["segar", "pasteurisasi", "uht"]).optional(),
  asalSusu: z.enum(["sapi", "koperasi", "distributor"]).optional(),
  usahaSusu: z.string().min(1, "Nama usaha wajib diisi").optional(),
  susuAman: z.enum(["ya", "tidak"]).optional(),
  NKV: z.enum(["ya", "tidak"]).optional(),
  nomorNKV: z.string().min(1, "Nomor NKV wajib diisi").optional(),
  uploadBukti: z.array(z.enum(["NKV", "invoice", "sks", "fotlab"])),
}).superRefine((data, ctx) => {
  if (data.NKV === "ya" && !data.nomorNKV?.trim()) {
    ctx.addIssue({
      code: "custom",
      path: ["nomorNKV"],
      message: "Nomor NKV wajib diisi",
    });
  }
});

export const formSchema = z.object({
  daging: dagingSchema.optional(),
  sayur: sayurSchema.optional(),
  buah: buahSchema.optional(),
  ternak: ternakSchema.optional(),
});

export const supplierDraftSaveSchema = z.object({
  user_id: z.string().uuid("User ID tidak valid"),
  store_name: z.string().trim().optional(),
  address: z.string().trim().optional(),
  contact_number: z.string().trim().optional(),
  category: z.string().trim().optional(),
  source_type: z.string().trim().optional(),
  business_desc: z.string().trim().optional(),
  current_step: z.number().int().positive().optional(),
});

export const supplierDraftSubmitSchema = z.object({
  user_id: z.string().uuid("User ID tidak valid"),
});

export type FormIdentitasValues = z.infer<typeof identitasSchema>;
export type FormAnswersValues = z.infer<typeof formSchema>;
export type SupplierDraftSavePayload = z.infer<typeof supplierDraftSaveSchema>;
export type SupplierDraftSubmitPayload = z.infer<
  typeof supplierDraftSubmitSchema
>;

export type UploadBuktiType = "NKV" | "invoice" | "sks" | "fotlab";
