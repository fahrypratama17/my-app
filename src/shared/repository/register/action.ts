import { apiFetch } from "@/shared/lib/api/fetcher";
import { TRegisterRequest } from "@/feature/auth/register/types/schema";
import { RegisterResponse } from "@/feature/auth/register/types/response";

const API_URL = "https://be-internship.bccdev.id/hanif/api/v1";

export async function register(payload: TRegisterRequest) {
  const res = await apiFetch<RegisterResponse>({
    url: `${API_URL}/auth/register`,
    options: {
      method: "POST",
      body: JSON.stringify(payload),
    },
  });
  return res;
}
