import { create } from "zustand";

type Answers = {
  jenisDaging?: "ayam" | "sapi" | "ikan";
  RPH?: "ya" | "tidak";
  namaRPH?: string;

  NKV?: "ya" | "tidak";
  nomorNKV?: string;
  uploadBukti?: "NKV" | "invoice" | "sks" | "fotlab";

  dagingSegar?: "ya" | "tidak";
  dagingAman?: "ya" | "tidak";
  ciriIkan?: "ya" | "tidak";

  asalSayur?: "petani" | "distributor" | "kebun";
  sayurSegar?: "ya" | "tidak";

  asalBuah?: "petani" | "distributor" | "kebun";
  buahSegar?: "ya" | "tidak";

  jenisTernak?: "susu" | "telur";
  sumberTelur?: "sendiri" | "lokal" | "distributor";
  namaPeternakan?: string;
  telurAman?: "ya" | "tidak";

  jenisSusu?: "segar" | "pasteurisasi" | "uht";
  asalSusu?: "sapi" | "koperasi" | "distributor";
  usahaSusu?: string;
  susuAman?: "ya" | "tidak";
};

type FormStore = {
  step: number;
  category: string | null;
  answers: Answers;
  isQuestionOpen: boolean;

  setStep: (step: number) => void;
  setCategory: (category: string) => void;
  resetAnswers: () => void;
  setAnswers: <K extends keyof Answers>(key: K, value: Answers[K]) => void;
};

export const useFormStore = create<FormStore>((set) => ({
  step: 1,
  category: null,
  answers: {},
  isQuestionOpen: false,

  setStep: (step) => set({ step }),

  setCategory: (category) =>
    set({ category, answers: {}, isQuestionOpen: true }),
  resetAnswers: () => set({ answers: {} }),

  setAnswers: (key, value) =>
    set((state) => ({ answers: { ...state.answers, [key]: value } })),
}));
