"use server";

import { registerSchema } from "@/feature/auth/register/types/schema";
import { register } from "./query";

type RegisterActionResult =
  | { success: true; message: string }
  | {
      success: false;
      message: string;
      error?: string;
      errors?: Record<string, string[] | undefined>;
    };

export async function registerAction(
  formData: FormData,
): Promise<RegisterActionResult> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
    role: formData.get("role"),
  };

  const parsed = registerSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      message: "Validasi register gagal",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { confirm_password: _confirmPassword, ...payload } = parsed.data;

  try {
    const res = await register(payload);
    return {
      success: true,
      message: res.message ?? "Register berhasil",
    };
  } catch (err) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "Register gagal",
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}
