"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import type {
  TForgotPasswordRequest,
  TResetPasswordRequest,
} from "@/feature/auth/resetPassword/types/schema";
import {
  showForgotPasswordToast,
  showResetPasswordToast,
} from "@/shared/component/toast";
import {
  forgotPassword,
  resetPassword,
} from "@/shared/repository/reset-password/action";

const queryKey = {
  resetPassword: ["reset-password"],
  forgotPassword: ["forgot-password"],
};

export const useForgotPasswordMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: queryKey.forgotPassword,
    mutationFn: (data: TForgotPasswordRequest) => forgotPassword(data),
    onSuccess: (res) => {
      if (!res.success) {
        showForgotPasswordToast("forgotFailed", res.error || res.message);
        return;
      }

      showForgotPasswordToast("forgotSuccess", res.data.message || res.message);
      router.replace("/reset-password");
    },
  });
};

export const useResetPasswordMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: queryKey.resetPassword,
    mutationFn: (data: TResetPasswordRequest) => resetPassword(data),
    onSuccess: (res) => {
      if (!res.success) {
        showResetPasswordToast("resetFailed", res.error || res.message);
        return;
      }

      showResetPasswordToast("resetSuccess");
      router.replace("/login");
    },
  });
};

