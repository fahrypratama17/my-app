import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { TLoginRequest } from "@/feature/auth/login/types/schema";
import { createSession } from "@/shared/repository/session-manager/action";
import { login, logout } from "@/shared/repository/login/action";
import { getRoleRedirectPath } from "@/shared/lib/role-redirect";
import { toast } from "sonner";

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
        toast.error("Gagal login", {
          description: res.error || res.message,
        });
        return;
      }

      if (!res.data.success) {
        toast.error("Gagal login", {
          description: res.data.message || "Email atau password salah",
        });
        return;
      }

      const accessToken = res.data.access_token;
      const refreshToken = res.data.refresh_token;
      const user = res.data.data;

      if (!accessToken || !user?.role) {
        toast.error("Gagal login", {
          description: "Respons login tidak lengkap",
        });
        return;
      }

      await createSession({
        token: accessToken,
        user,
        refreshToken,
        isLoggedIn: true,
      });

      toast.success("Berhasil login", {
        description: `Selamat datang ${user.name}!`,
      });
      router.push(getRoleRedirectPath(user.role));
      queryClient.refetchQueries({ queryKey: queryKey.login });
    },
    onError: (error) => {
      toast.error("Gagal login", {
        description:
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan saat login",
      });
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
      router.refresh();
      queryClient.resetQueries({ queryKey: queryKey.login });
    },
    onError: (error) => {
      toast.error("Gagal logout", {
        description:
          error instanceof Error ? error.message : "Terjadi kesalahan saat logout",
      });
    },
  });
};
