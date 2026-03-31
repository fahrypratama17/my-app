import { z } from "zod";
import { Roles } from "@/shared/lib/auth/role";

export const registerSchema = z.object({
  name: z.string().min(2, "Minimal 2 karakter"),
  email: z
    .string()
    .min(1, "Masukkan email Anda!")
    .refine(
      (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      },
      {
        message: "Tolong masukkan email Anda!",
      },
    ),
  password: z
    .string()
    .min(8, "Password minimal 8 karakter")
    .max(50, "Password maksimal 8 karakter"),
  confirm_password: z
    .string()
    .min(8, "Password minimal 8 karakter")
    .max(50, "Password maksimal 8 karakter"),
  role: z.enum([Roles.admin, Roles.sppg, Roles.supplier]),
});

export type TRegisterRequest = z.infer<typeof registerSchema>;
