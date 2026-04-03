import { create } from "zustand";
import type {
  FormAnswersValues,
  FormIdentitasValues,
} from "@/feature/auth/form/types/type";

type Identitas = FormIdentitasValues;

type Answers = FormAnswersValues;

type FormStore = {
  step: number;
  category: string | null;
  identitas: Identitas;
  answers: Answers;
  isQuestionOpen: boolean;

  setStep: (step: number) => void;
  setCategory: (category: string) => void;
  setIdentitasField: <K extends keyof Identitas>(
    field: K,
    value: Identitas[K],
  ) => void;
  resetIdentitas: () => void;
  resetAnswers: () => void;
  setAnswers: <
    C extends keyof Answers,
    K extends keyof NonNullable<Answers[C]>,
  >(
    category: C,
    key: K,
    value: NonNullable<Answers[C]>[K],
  ) => void;
};

export const useFormStore = create<FormStore>((set) => ({
  step: 1,
  category: null,
  identitas: {
    store_name: "",
    owner_name: "",
    address: "",
    contact_number: "",
  },
  answers: {},
  isQuestionOpen: false,

  setStep: (step) => set({ step }),

  setCategory: (category) =>
    set({ category, answers: {}, isQuestionOpen: true }),

  setIdentitasField: (field, value) =>
    set((state) => ({
      identitas: {
        ...state.identitas,
        [field]: value,
      },
    })),

  resetIdentitas: () =>
    set({
      identitas: {
        store_name: "",
        owner_name: "",
        address: "",
        contact_number: "",
      },
    }),

  resetAnswers: () => set({ answers: {} }),

  setAnswers: (category, key, value) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [category]: { ...(state.answers[category] ?? {}), [key]: value },
      },
    })),
}));
