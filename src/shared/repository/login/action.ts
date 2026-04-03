import { destroySession } from "@/shared/repository/session-manager/action";
import { TLoginRequest } from "@/feature/auth/login/types/schema";
import { apiFetch } from "@/shared/lib/api/fetcher";
import { LoginResponse } from "@/feature/auth/login/types/response";
import type { ILoginUser } from "@/shared/repository/login/dto";

export async function login(payload: TLoginRequest) {
  const res = await apiFetch<LoginResponse>({
    url: "/api/auth/login",
    options: { method: "POST", body: JSON.stringify(payload) },
  });
  return res;
}

type ProfileEnvelope = {
  success: boolean;
  message: string;
  data: unknown;
};

function mapProfileUser(data: unknown): Partial<ILoginUser> | null {
  if (!data || typeof data !== "object") {
    return null;
  }

  const raw = data as {
    user_id?: unknown;
    name?: unknown;
    email?: unknown;
    address?: unknown;
    role?: unknown;
    user?: {
      user_id?: unknown;
      name?: unknown;
      email?: unknown;
      address?: unknown;
      role?: unknown;
    };
  };

  const source = raw.user && typeof raw.user === "object" ? raw.user : raw;
  const user: Partial<ILoginUser> = {};

  if (typeof source.user_id === "string") user.user_id = source.user_id;
  if (typeof source.name === "string") user.name = source.name;
  if (typeof source.email === "string") user.email = source.email;
  if (typeof source.address === "string") user.address = source.address;
  if (typeof source.role === "string")
    user.role = source.role as ILoginUser["role"];

  return Object.keys(user).length > 0 ? user : null;
}

export async function getProfileAfterLogin(userId?: string) {
  const endpoints = userId ? [`/sppg/user/${userId}`, `/sppg/${userId}`] : [];

  for (const endpoint of endpoints) {
    const res = await apiFetch<ProfileEnvelope>({
      url: `/api/protected${endpoint}`,
      options: { method: "GET" },
      errorMessage: "Gagal mengambil data profil",
    });

    if (!res.success) {
      continue;
    }

    if (!res.data.success || !res.data.data) {
      continue;
    }

    const mapped = mapProfileUser(res.data.data);
    if (mapped) {
      return mapped;
    }
  }

  return null;
}

export async function logout() {
  await destroySession();
}
