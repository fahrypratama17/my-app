"use client";

import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { TLoginRequest } from "@/feature/auth/login/types/schema";
import { useDebounce } from "@/hooks/use-debounce";
import { showLoginToast } from "@/shared/component/toast";
import { useLoginMutation } from "@/shared/repository/login/query";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm: TLoginRequest = {
  email: "",
  password: "",
};

export const useLoginForm = () => {
  const [form, setForm] = useState<TLoginRequest>(initialForm);
  const { mutate, isPending } = useLoginMutation();
  const debouncedEmail = useDebounce(form.email, 500);

  useEffect(() => {
    if (!debouncedEmail) {
      return;
    }

    if (!emailRegex.test(debouncedEmail)) {
      showLoginToast("loginEmailInvalid");
    }
  }, [debouncedEmail]);

  const setField = (field: keyof TLoginRequest, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleInputChange =
    (field: keyof TLoginRequest) => (event: ChangeEvent<HTMLInputElement>) => {
      setField(field, event.target.value);
    };

  const handleSubmit = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (!form.email.trim()) {
      showLoginToast("loginEmailRequired");
      return;
    }

    if (!emailRegex.test(form.email)) {
      showLoginToast("loginEmailInvalid");
      return;
    }

    if (!form.password.trim()) {
      showLoginToast("loginPasswordRequired");
      return;
    }

    mutate(form);
  };

  return {
    form,
    isPending,
    setField,
    handleInputChange,
    handleSubmit,
  };
};
