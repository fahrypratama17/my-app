import { create } from "zustand";

type Answers = {
  jenisDaging?: "ayam" | "sapi" | "ikan";
  jenisTernak?: "susu" | "telur";
};

type FormStore = {
  step: number;
  category: string | null;
  answers: Answers;

  setStep: (step: number) => void;
  setCategory: (category: string) => void;
  setAnswers: <K extends keyof Answers>(key: K, value: Answers[K]) => void;
};

export const useFormStore = create<FormStore>((set) => ({
  step: 1,
  category: null,
  answers: {},

  setStep: (step) => set({ step }),

  setCategory: (category) => set({ category, answers: {} }),

  setAnswers: (key, value) =>
    set((state) => ({ answers: { ...state.answers, [key]: value } })),
}));
