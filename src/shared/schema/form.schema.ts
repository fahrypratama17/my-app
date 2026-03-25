import { z } from "zod";

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
});

export const formSchema = z.object({
  daging: dagingSchema.optional(),
  sayur: sayurSchema.optional(),
  buah: buahSchema.optional(),
  ternak: ternakSchema.optional(),
});
