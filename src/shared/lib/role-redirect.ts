import { notFound } from "next/navigation";
import { RolesMap } from "@/shared/lib/role-map";

export function getRoleRedirectPath(role: string): string {
  if (role === RolesMap.admin) {
    return "/admin/dashboard";
  }
  if (role === RolesMap.sppg) {
    return "/sppg/cari-supplier";
  }
  if (role === RolesMap.supplier) {
    return "/mitra/dashboard";
  }
  return notFound();
}

export function getRegisterRedirectPath(role: string): string {
  if (role === RolesMap.sppg) {
    return "/sppg/cari-supplier";
  }
  if (role === RolesMap.supplier) {
    return "/form-1";
  }
  return notFound();
}

