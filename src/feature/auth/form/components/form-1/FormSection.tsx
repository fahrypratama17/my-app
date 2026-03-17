"use client";
import { useFormStore } from "@/shared/store/useFormStore";
import Progress from "@/feature/auth/form/components/Progress";
import Identitas from "@/feature/auth/form/components/form-1/Identitas";
import ButtonNext from "@/feature/auth/form/components/ButtonNext";

const FormSection = () => {
  const setStep = useFormStore((state) => state.setStep);
  const step = useFormStore((state) => state.step);
  return (
    <>
      <div className="mx-auto w-[90%] pt-20">
        <Progress />
        <p className="text-2xl-semibold py-8 text-green-900">
          Bagian ini diisi oleh semua calon mitra.
        </p>
        <Identitas />
        <div className="flex origin-right items-center justify-end">
          <ButtonNext onClick={() => setStep(step + 1)} href="/form-2">
            Lanjutkan
          </ButtonNext>
        </div>
      </div>
    </>
  );
};

export default FormSection;
