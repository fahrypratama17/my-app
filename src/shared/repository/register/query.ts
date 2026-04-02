"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createSession } from "@/shared/repository/session-manager/action";
import { register } from "@/shared/repository/register/action";
import { getRegisterRedirectPath } from "@/shared/lib/role-redirect";
import type { TRegisterRequest } from "@/feature/auth/register/types/schema";

const queryKey = {
  register: ["auth-session"],
};

export const useRegisterMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationKey: queryKey.register,
    mutationFn: (data: TRegisterRequest) => register(data),
    onSuccess: async (res) => {
      if (!res.success) {
        return;
      }
      await createSession(res.data.access_token);
      router.push(getRegisterRedirectPath(res.data.user.role));
      queryClient.refetchQueries({ queryKey: queryKey.register });
    },
  });
};
