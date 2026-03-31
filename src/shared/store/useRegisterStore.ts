import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type RegisterRole = "sppg" | "supplier";

type RegisterDraftState = {
  name: string;
  email: string;
  role: RegisterRole | null;
  password: string;
  confirmPassword: string;
  setStep1: (payload: {
    name: string;
    email: string;
    role: RegisterRole;
  }) => void;
  setPassword: (payload: { password: string; confirmPassword: string }) => void;
  reset: () => void;
};

const initialState = {
  name: "",
  email: "",
  role: null,
  password: "",
  confirmPassword: "",
};

export const useRegisterStore = create<RegisterDraftState>()(
  persist(
    (set) => ({
      ...initialState,
      setStep1: ({ name, email, role }) =>
        set({
          name: name.trim(),
          email: email.trim(),
          role,
        }),
      setPassword: ({ password, confirmPassword }) =>
        set({ password, confirmPassword }),
      reset: () => set(initialState),
    }),
    {
      name: "register-draft",
      storage: createJSONStorage(() => sessionStorage), // survive refresh tab
    },
  ),
);
