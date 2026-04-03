"use client";

import { useFormStore } from "@/shared/store/useFormStore";
import PertanyaanSayur from "@/feature/auth/form/components/form-2/PertanyaanSayur";
import PertanyaanBuah from "@/feature/auth/form/components/form-2/PertanyaanBuah";
import PertanyaanTernak from "@/feature/auth/form/components/form-2/PertanyaanTernak";
import PertanyaanDaging from "@/feature/auth/form/components/form-2/PertanyaanDaging";
import ButtonPrev from "@/shared/component/auth/ButtonPrev";
import FormSubmitButton from "@/feature/auth/form/components/form-2/FormSubmitButton";

const FormSectionInteractive = () => {
  const category = useFormStore((state) => state.category);
  const step = useFormStore((state) => state.step);
  const setStep = useFormStore((state) => state.setStep);
  const isQuestionOpen = useFormStore((state) => state.isQuestionOpen);

  return (
    <>
      {category === "Daging" && <PertanyaanDaging />}
      {category === "Sayur" && <PertanyaanSayur />}
      {category === "Buah" && <PertanyaanBuah />}
      {category === "Hasil Ternak" && <PertanyaanTernak />}

      <div className="flex origin-right items-center justify-between">
        <ButtonPrev
          onClick={() => setStep(isQuestionOpen ? step - 2 : step - 1)}
          href="/form-1"
        >
          Kembali
        </ButtonPrev>
        <FormSubmitButton />
      </div>
    </>
  );
};

export default FormSectionInteractive;
