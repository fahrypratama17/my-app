import { destroySession } from "@/shared/repository/session-manager/action";
import { TLoginRequest } from "@/feature/auth/login/types/schema";
import { apiFetch } from "@/shared/lib/api/fetcher";
import { LoginResponse } from "@/feature/auth/login/types/response";

export async function login(payload: TLoginRequest) {
  return apiFetch<LoginResponse>({
    url: "/api/auth/login",
    options: { method: "POST", body: JSON.stringify(payload) },
    withAuth: false,
    errorMessage: "Gagal memproses endpoint auth",
  });
}

export async function logout() {
  await destroySession();
}
