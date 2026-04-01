import { create } from "zustand";
import { Roles } from "@/shared/lib/auth/role";

type RegisterState = {
  name: string;
  email: string;
  address: string;
  password: string;
  confirmPassword: string;
  role: Roles;

  setField: (field: keyof RegisterState, value: string) => void;
  reset: () => void;
};

export const useRegisterStore = create<RegisterState>((set) => ({
  name: "",
  email: "",
  address: "",
  password: "",
  confirmPassword: "",
  role: Roles.sppg,

  setField: (field, value) =>
    set((state) => ({
      ...state,
      [field]: value,
    })),

  reset: () =>
    set({
      name: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
      role: Roles.sppg,
    }),
}));
