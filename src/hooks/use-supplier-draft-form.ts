"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  identitasSchema,
  supplierDraftSaveSchema,
  supplierDraftSubmitSchema,
} from "@/feature/auth/form/types/type";
import { useFormStore } from "@/shared/store/useFormStore";
import {
  useSaveSupplierDraftMutation,
  useSubmitSupplierDraftMutation,
} from "@/shared/repository/supplier-draft/query";
import { useSessionQuery } from "@/shared/repository/session-manager/query";
import { useRegisterStore } from "@/shared/store/useRegisterStore";
import { Roles } from "@/shared/lib/auth/role";
import { register } from "@/shared/repository/register/action";

function getFirstZodErrorMessage(error: { issues: Array<{ message: string }> }) {
  return error.issues[0]?.message || "Data tidak valid";
}

export function useSupplierDraftForm() {
  const router = useRouter();
  const step = useFormStore((state) => state.step);
  const setStep = useFormStore((state) => state.setStep);
  const identitas = useFormStore((state) => state.identitas);
  const setMitraFormSubmitted = useFormStore((state) => state.setMitraFormSubmitted);
  const role = useRegisterStore((state) => state.role);
  const setRegisterField = useRegisterStore((state) => state.setField);
  const registerState = useRegisterStore();

  const { data: session } = useSessionQuery();
  const saveMutation = useSaveSupplierDraftMutation();
  const submitMutation = useSubmitSupplierDraftMutation();

  const getUserId = () => session?.user?.user_id;

  const saveDraftAndGoToForm2 = async () => {
    const identitasResult = identitasSchema.safeParse(identitas);
    if (!identitasResult.success) {
      toast.error("Data identitas belum lengkap", {
        description: getFirstZodErrorMessage(identitasResult.error),
      });
      return;
    }

    const userId = getUserId();
    if (!userId) {
      if (role === Roles.supplier) {
        setStep(Math.max(step + 1, 2));
        router.push("/form-2");
        return;
      }

      toast.error("Sesi login tidak ditemukan", {
        description: "Silakan login ulang untuk melanjutkan.",
      });
      return;
    }

    const payloadResult = supplierDraftSaveSchema.safeParse({
      user_id: userId,
      store_name: identitasResult.data.store_name,
      address: identitasResult.data.address,
      contact_number: identitasResult.data.contact_number,
      current_step: Math.max(step + 1, 2),
    });

    if (!payloadResult.success) {
      toast.error("Payload draft tidak valid", {
        description: getFirstZodErrorMessage(payloadResult.error),
      });
      return;
    }

    const res = await saveMutation.mutateAsync(payloadResult.data);
    if (!res.success) {
      toast.error("Gagal menyimpan draft", {
        description: res.error || res.message,
      });
      return;
    }

    if (!res.data.success) {
      toast.error("Gagal menyimpan draft", {
        description: res.data.message,
      });
      return;
    }

    setStep(Math.max(step + 1, 2));
    toast.success("Draft tersimpan", {
      description: res.data.message,
    });
    router.push("/form-2");
  };

  const submitDraftAndFinish = async () => {
    const userId = getUserId();

    if (!userId && role === Roles.supplier) {
      const registerPayload = {
        name: (identitas.store_name || registerState.name).trim(),
        address: (identitas.address || registerState.address).trim(),
        email: registerState.email.trim(),
        password: registerState.password,
        confirm_password: registerState.confirmPassword,
        role: registerState.role,
      };

      if (!registerPayload.password || !registerPayload.confirm_password) {
        toast.error("Password belum diisi", {
          description: "Isi password terlebih dahulu sebelum submit form.",
        });
        router.push("/password");
        return;
      }

      const registerRes = await register(registerPayload);
      if (!registerRes.success) {
        toast.error("Gagal membuat akun mitra", {
          description: registerRes.error || registerRes.message,
        });
        return;
      }

      if (!registerRes.data?.success) {
        toast.error("Gagal membuat akun mitra", {
          description: registerRes.data?.message || "Terjadi kesalahan saat register",
        });
        return;
      }

      setRegisterField("name", registerPayload.name);
      setRegisterField("address", registerPayload.address);
      setMitraFormSubmitted(true);
      toast.success("Akun mitra berhasil dibuat", {
        description: "Pendaftaran mitra selesai. Silakan login untuk melanjutkan.",
      });
      router.push("/register-success");
      return;
    }

    const payloadResult = supplierDraftSubmitSchema.safeParse({ user_id: userId });

    if (!payloadResult.success) {
      toast.error("Gagal submit pendaftaran", {
        description: getFirstZodErrorMessage(payloadResult.error),
      });
      return;
    }

    const res = await submitMutation.mutateAsync(payloadResult.data);
    if (!res.success) {
      toast.error("Gagal submit pendaftaran", {
        description: res.error || res.message,
      });
      return;
    }

    if (!res.data.success) {
      toast.error("Gagal submit pendaftaran", {
        description: res.data.message,
      });
      return;
    }

    toast.success("Pendaftaran berhasil disubmit", {
      description: res.data.message,
    });
    router.push("/register-success");
  };

  return {
    saveDraftAndGoToForm2,
    submitDraftAndFinish,
    isSavingDraft: saveMutation.isPending,
    isSubmittingDraft: submitMutation.isPending,
  };
}

