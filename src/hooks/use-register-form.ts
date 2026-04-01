import { useRegisterMutation } from "@/shared/repository/register/query";
import type { TRegisterRequest } from "@/feature/auth/register/types/schema";

export const useRegisterForm = () => {
  const { mutate, isPending } = useRegisterMutation();

  const handleSubmit = (data: TRegisterRequest) => {
    mutate(data);
  };

  return {
    handleSubmit,
    isPending,
  };
};
