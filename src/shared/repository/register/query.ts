import { env } from "@/shared/lib/env";
import type { RegisterRequest, RegisterResponse } from "./dto";

export async function register(
  payload: RegisterRequest,
): Promise<RegisterResponse> {
  const res = await fetch(`${env.API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const data = (await res.json()) as RegisterResponse;

  if (!res.ok || !data.success) {
    throw new Error(data.message ?? "Register gagal");
  }

  return data;
}
