"use client";

import { useMutation } from "@tanstack/react-query";
import type {
  ISupplierDraftSaveRequest,
  ISupplierDraftSubmitRequest,
} from "@/shared/repository/supplier-draft/dto";
import {
  saveSupplierDraft,
  submitSupplierDraft,
} from "@/shared/repository/supplier-draft/action";

const queryKey = {
  supplierDraftSave: ["supplier-draft-save"],
  supplierDraftSubmit: ["supplier-draft-submit"],
};

export const useSaveSupplierDraftMutation = () => {
  return useMutation({
    mutationKey: queryKey.supplierDraftSave,
    mutationFn: (payload: ISupplierDraftSaveRequest) => saveSupplierDraft(payload),
  });
};

export const useSubmitSupplierDraftMutation = () => {
  return useMutation({
    mutationKey: queryKey.supplierDraftSubmit,
    mutationFn: (payload: ISupplierDraftSubmitRequest) => submitSupplierDraft(payload),
  });
};

