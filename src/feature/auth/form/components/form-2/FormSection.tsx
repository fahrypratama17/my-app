"use client";

import { useFormStore } from "@/shared/store/useFormStore";
import Progress from "@/shared/component/Progress";
import Kategori from "@/feature/auth/form/components/form-2/Kategori";
import ButtonNext from "@/shared/component/auth/ButtonNext";
import PertanyaanSayur from "@/feature/auth/form/components/form-2/PertanyaanSayur";
import PertanyaanBuah from "@/feature/auth/form/components/form-2/PertanyaanBuah";
import PertanyaanTernak from "@/feature/auth/form/components/form-2/PertanyaanTernak";
import PertanyaanDaging from "@/feature/auth/form/components/form-2/PertanyaanDaging";
import ButtonPrev from "@/shared/component/auth/ButtonPrev";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSupplierDraftForm } from "@/hooks/use-supplier-draft-form";

const FormSection = () => {
  const { category } = useFormStore();
  const router = useRouter();
  const { submitDraftAndFinish, isSubmittingDraft } = useSupplierDraftForm();

  const step = useFormStore((state) => state.step);
  const setStep = useFormStore((state) => state.setStep);
  const { isQuestionOpen } = useFormStore();

  useEffect(() => {
    if (step < 2) {
      router.push("/form-1");
    }
  }, [router, step]);

  return (
    <>
      <div className="mx-auto w-[90%] pt-4 md:pt-20">
        <Progress />
        <p className="py-8 text-[10px] font-semibold text-green-900 md:text-2xl">
          Calon mitra memilih kategori yang sesuai dengan yang dijual
        </p>

        <Kategori />

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
          <ButtonNext onClick={submitDraftAndFinish} disabled={isSubmittingDraft}>
            Lanjutkan
          </ButtonNext>
        </div>
      </div>
    </>
  );
};

export default FormSection;
