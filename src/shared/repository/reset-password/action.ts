import type {
  ForgotPasswordResponse,
  ResetPasswordResponse,
} from "@/feature/auth/resetPassword/types/response";
import { apiFetch } from "@/shared/lib/api/fetcher";
import { envClient } from "@/shared/lib/env.client";
import type {
  IForgotPasswordRequest,
  IResetPasswordRequest,
} from "@/shared/repository/reset-password/dto";

export async function resetPassword(payload: IResetPasswordRequest) {
  return apiFetch<ResetPasswordResponse>({
	url: `${envClient.NEXT_PUBLIC_API_URL}/auth/reset-password`,
	options: {
	  method: "POST",
	  body: JSON.stringify(payload),
	},
	errorMessage: "Gagal mereset password",
	successMessage: "Berhasil mereset password",
  });
}

export async function forgotPassword(payload: IForgotPasswordRequest) {
  return apiFetch<ForgotPasswordResponse>({
	url: `${envClient.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
	options: {
	  method: "POST",
	  body: JSON.stringify(payload),
	},
	errorMessage: "Gagal mengirim permintaan lupa password",
	successMessage: "Permintaan lupa password berhasil dikirim",
  });
}

