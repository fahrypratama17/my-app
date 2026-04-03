import { apiFetch } from "@/shared/lib/api/fetcher";
import { TRegisterRequest } from "@/feature/auth/register/types/schema";
import { RegisterResponse } from "@/feature/auth/register/types/response";

export async function register(payload: TRegisterRequest) {
  return apiFetch<RegisterResponse>({
    url: "/api/auth/register",
    options: {
      method: "POST",
      body: JSON.stringify(payload),
    },
    withAuth: false,
    errorMessage: "Gagal memproses endpoint auth",
  });
}
