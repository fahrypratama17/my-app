"use client";

import ButtonNext from "@/shared/component/auth/ButtonNext";
import { useFormStore } from "@/shared/store/useFormStore";
import { useSupplierDraftForm } from "@/hooks/use-supplier-draft-form";
import { showFormSectionToast } from "@/shared/component/toast";
import {
  buahSchema,
  dagingSchema,
  sayurSchema,
  ternakSchema,
} from "@/feature/auth/form/types/type";

const FormSubmitButton = () => {
  const { category, answers } = useFormStore();
  const { submitDraftAndFinish, isSubmittingDraft } = useSupplierDraftForm();

  const handleSubmit = () => {
    if (!category) {
      showFormSectionToast("categoryRequired");
      return;
    }

    let result:
      | ReturnType<typeof dagingSchema.safeParse>
      | ReturnType<typeof sayurSchema.safeParse>
      | ReturnType<typeof buahSchema.safeParse>
      | ReturnType<typeof ternakSchema.safeParse>;

    if (category === "Daging") {
      result = dagingSchema.safeParse(answers.daging);
    } else if (category === "Sayur") {
      result = sayurSchema.safeParse(answers.sayur);
    } else if (category === "Buah") {
      result = buahSchema.safeParse(answers.buah);
    } else {
      result = ternakSchema.safeParse(answers.ternak);
    }

    if (!result.success) {
      showFormSectionToast("questionRequired", result.error.issues[0]?.message);
      return;
    }

    submitDraftAndFinish();
  };

  return (
    <ButtonNext onClick={handleSubmit} disabled={isSubmittingDraft}>
      Lanjutkan
    </ButtonNext>
  );
};

export default FormSubmitButton;

