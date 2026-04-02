"use client";

import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { TForgotPasswordRequest } from "@/feature/auth/resetPassword/types/schema";
import { useDebounce } from "@/hooks/use-debounce";
import { showForgotPasswordToast } from "@/shared/component/toast";
import { useForgotPasswordMutation } from "@/shared/repository/reset-password/query";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm: TForgotPasswordRequest = {
  email: "",
};

export const useForgotPasswordForm = () => {
  const [form, setForm] = useState<TForgotPasswordRequest>(initialForm);
  const { mutate, isPending } = useForgotPasswordMutation();
  const debouncedEmail = useDebounce(form.email, 500);

  useEffect(() => {
    if (!debouncedEmail) {
      return;
    }

    if (!emailRegex.test(debouncedEmail)) {
      showForgotPasswordToast("emailInvalid");
    }
  }, [debouncedEmail]);

  const setField = (field: keyof TForgotPasswordRequest, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleInputChange =
    (field: keyof TForgotPasswordRequest) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setField(field, event.target.value);
    };

  const handleSubmit = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (!form.email.trim()) {
      showForgotPasswordToast("emailRequired");
      return;
    }

    if (!emailRegex.test(form.email)) {
      showForgotPasswordToast("emailInvalid");
      return;
    }

    mutate({ email: form.email.trim() });
  };

  return {
    form,
    isPending,
    setField,
    handleInputChange,
    handleSubmit,
  };
};
