import { useState } from "react";
import { useFormStore } from "@/shared/store/useFormStore";
import {
  buahSchema,
  dagingSchema,
  formSchema,
  sayurSchema,
  ternakSchema,
} from "@/shared/schema/form.schema";
import { z } from "zod";

export const useFormValidation = () => {
  const { answers } = useFormStore();
  const [errors, setErrors] = useState<z.ZodFormattedError<unknown> | null>(
    null,
  );

  const validateAll = () => {
    const result = formSchema.safeParse(answers);

    if (!result.success) {
      setErrors(result.error.format());
      return false;
    }

    setErrors(null);
    return true;
  };

  const validateDaging = () => {
    const result = dagingSchema.safeParse(answers.daging);

    if (!result.success) {
      setErrors(result.error.format());
      return false;
    }

    setErrors(null);
    return true;
  };

  const validateSayur = () => {
    const result = sayurSchema.safeParse(answers.sayur);

    if (!result.success) {
      setErrors(result.error.format());
      return false;
    }

    setErrors(null);
    return true;
  };

  const validateBuah = () => {
    const result = buahSchema.safeParse(answers.buah);

    if (!result.success) {
      setErrors(result.error.format());
      return false;
    }

    setErrors(null);
    return true;
  };

  const validateTernak = () => {
    const result = ternakSchema.safeParse(answers.ternak);

    if (!result.success) {
      setErrors(result.error.format());
      return false;
    }

    setErrors(null);
    return true;
  };

  return {
    errors,
    validateAll,
    validateDaging,
    validateSayur,
    validateBuah,
    validateTernak,
  };
};
