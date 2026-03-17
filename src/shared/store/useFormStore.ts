import { create } from "zustand";

type FormStore = {
  step: number;
  category: string | null;

  setStep: (step: number) => void;
  setCategory: (category: string) => void;
};

export const useFormStore = create<FormStore>((set) => ({
  step: 1,
  category: null,

  setStep: (step) => set({ step }),
  setCategory: (category) => set({ category }),
}));
