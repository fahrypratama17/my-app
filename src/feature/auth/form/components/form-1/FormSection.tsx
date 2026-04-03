"use client";
import Progress from "@/shared/component/Progress";
import Identitas from "@/feature/auth/form/components/form-1/Identitas";
import ButtonNext from "@/shared/component/auth/ButtonNext";
import ButtonPrev from "@/shared/component/auth/ButtonPrev";
import { useSupplierDraftForm } from "@/hooks/use-supplier-draft-form";
import { useFormStore } from "@/shared/store/useFormStore";
import { identitasSchema } from "@/feature/auth/form/types/type";
import { showFormSectionToast } from "@/shared/component/toast";

const FormSection = () => {
  const identitas = useFormStore((state) => state.identitas);
  const { saveDraftAndGoToForm2, isSavingDraft } = useSupplierDraftForm();

  const handleNext = () => {
    const result = identitasSchema.safeParse(identitas);
    if (!result.success) {
      showFormSectionToast(
        "identitasRequired",
        result.error.issues[0]?.message,
      );
      return;
    }

    saveDraftAndGoToForm2();
  };

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
          <ButtonNext onClick={handleNext} disabled={isSavingDraft}>
            Lanjutkan
          </ButtonNext>
        </div>
      </div>
    </>
  );
};

export default FormSection;
