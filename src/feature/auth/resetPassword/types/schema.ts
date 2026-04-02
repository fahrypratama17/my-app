import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.email("Format email tidak valid"),
});

export type TForgotPasswordRequest = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z
  .object({
	token: z.string().min(1, "Token reset password tidak ditemukan"),
	new_password: z
	  .string()
	  .min(8, "Password minimal 8 karakter")
	  .max(50, "Password maksimal 50 karakter"),
	confirm_password: z
	  .string()
	  .min(8, "Password minimal 8 karakter")
	  .max(50, "Password maksimal 50 karakter"),
  })
  .refine((value) => value.new_password === value.confirm_password, {
	path: ["confirm_password"],
	message: "Konfirmasi password harus sama",
  });

export type TResetPasswordRequest = z.infer<typeof resetPasswordSchema>;

