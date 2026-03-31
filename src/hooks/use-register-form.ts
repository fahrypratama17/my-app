"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { registerAction } from "@/shared/repository/register/action";
// optional kalau ada util toast di project kamu
// import { errorToast, successToast } from "@/shared/lib/toast";

const queryKey = {
  auth: ["auth-session"],
};

export function useRegisterMutation() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationKey: ["auth", "register"],
    mutationFn: (formData: FormData) => registerAction(formData),
    onSuccess: async (res) => {
      if (!res.success) {
        // errorToast("Gagal Register", { description: res.error || res.message });
        return;
      }

      // successToast("Berhasil Register", { description: res.message });
      router.push("/register-success"); // atau "/login"
      await queryClient.refetchQueries({ queryKey: queryKey.auth });
    },
  });
}
