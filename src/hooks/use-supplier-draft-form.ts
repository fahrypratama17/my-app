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

function getFirstZodErrorMessage(error: { issues: Array<{ message: string }> }) {
  return error.issues[0]?.message || "Data tidak valid";
}

export function useSupplierDraftForm() {
  const router = useRouter();
  const step = useFormStore((state) => state.step);
  const setStep = useFormStore((state) => state.setStep);
  const identitas = useFormStore((state) => state.identitas);

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

