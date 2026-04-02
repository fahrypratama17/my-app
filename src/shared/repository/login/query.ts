import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { TLoginRequest } from "@/feature/auth/login/types/schema";
import { createSession } from "@/shared/repository/session-manager/action";
import { login, logout } from "@/shared/repository/login/action";
import { getRoleRedirectPath } from "@/shared/lib/role-redirect";

const queryKey = {
  login: ["auth-session"],
};

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationKey: queryKey.login,
    mutationFn: (data: TLoginRequest) => login(data),
    onSuccess: async (res) => {
      if (!res.success) {
        return;
      }
      await createSession(res.data.access_token);
      router.push(getRoleRedirectPath(res.data.user.role));
      queryClient.refetchQueries({ queryKey: queryKey.login });
    },
  });
};

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationKey: queryKey.login,
    mutationFn: () => logout(),
    onSuccess: () => {
      router.replace("/");
      queryClient.resetQueries({ queryKey: queryKey.login });
    },
  });
};
