"use client";
import { useFormStore } from "@/shared/store/useFormStore";
import Progress from "@/shared/component/Progress";
import Identitas from "@/feature/auth/form/components/form-1/Identitas";
import ButtonNext from "@/shared/component/auth/ButtonNext";
import ButtonPrev from "@/shared/component/auth/ButtonPrev";

const FormSection = () => {
  const setStep = useFormStore((state) => state.setStep);
  const step = useFormStore((state) => state.step);
  return (
    <>
      <div className="mx-auto w-[90%] pt-4 md:pt-20">
        <Progress />
        <p className="py-8 text-[10px] font-semibold text-green-900 md:text-2xl">
          Bagian ini diisi oleh semua calon mitra.
        </p>
        <Identitas />
        <div className="flex origin-right items-center justify-between">
          <ButtonPrev href="/register">Kembali</ButtonPrev>
          <ButtonNext onClick={() => setStep(step + 1)} href="/form-2">
            Lanjutkan
          </ButtonNext>
        </div>
      </div>
    </>
  );
};

export default FormSection;
