import { toast } from "sonner";

type ToastType = "error" | "warning" | "success";

type ToastConfig = {
  type: ToastType;
  id: string;
  title: string;
  description: string;
};

export type PasswordToastKey =
  | "passwordRequired"
  | "confirmPasswordRequired"
  | "passwordMinLength"
  | "passwordMaxLength"
  | "passwordMismatch"
  | "mitraFormRequired";

export type RegisterRequiredToastKey =
  | "nameRequired"
  | "addressRequired"
  | "emailRequired"
  | "emailInvalid";

export type LoginToastKey =
  | "loginEmailRequired"
  | "loginEmailInvalid"
  | "loginPasswordRequired";

export type ResetPasswordToastKey =
  | "tokenRequired"
  | "passwordRequired"
  | "confirmPasswordRequired"
  | "passwordMinLength"
  | "passwordMaxLength"
  | "passwordMismatch"
  | "resetFailed"
  | "resetSuccess";

export type ForgotPasswordToastKey =
  | "emailRequired"
  | "emailInvalid"
  | "forgotFailed"
  | "forgotSuccess";

export type FormSectionToastKey =
  | "categoryRequired"
  | "questionRequired"
  | "identitasRequired";

const passwordToastMap: Record<PasswordToastKey, ToastConfig> = {
  passwordRequired: {
    type: "error",
    id: "register-password-required",
    title: "Password Tidak Boleh Kosong!",
    description: "Masukkan password terlebih dahulu.",
  },
  confirmPasswordRequired: {
    type: "error",
    id: "register-confirm-password-required",
    title: "Konfirmasi password Tidak Boleh Kosong!",
    description: "Masukkan konfirmasi password terlebih dahulu.",
  },
  passwordMinLength: {
    type: "error",
    id: "register-password-min-length",
    title: "Password terlalu pendek",
    description: "Password minimal 8 karakter.",
  },
  passwordMaxLength: {
    type: "warning",
    id: "register-password-max-length",
    title: "Password terlalu panjang",
    description: "Password maksimal 50 karakter.",
  },
  passwordMismatch: {
    type: "error",
    id: "register-password-confirmation",
    title: "Password Tidak Sama!",
    description: "Pastikan konfirmasi kata sandi sesuai.",
  },
  mitraFormRequired: {
    type: "warning",
    id: "register-mitra-form-required",
    title: "Lengkapi form mitra terlebih dahulu",
    description: "Isi form-1 dan form-2 sebelum membuat akun mitra.",
  },
};

const registerRequiredToastMap: Record<RegisterRequiredToastKey, ToastConfig> =
  {
    nameRequired: {
      type: "error",
      id: "register-name-required",
      title: "Nama Tidak Boleh Kosong!",
      description: "Masukkan nama terlebih dahulu.",
    },
    addressRequired: {
      type: "error",
      id: "register-address-required",
      title: "Alamat Tidak Boleh Kosong!",
      description: "Masukkan alamat terlebih dahulu.",
    },
    emailRequired: {
      type: "error",
      id: "register-email-required",
      title: "Email Tidak Boleh Kosong!",
      description: "Masukkan email terlebih dahulu.",
    },
    emailInvalid: {
      type: "warning",
      id: "register-email-invalid",
      title: "Format email tidak valid",
      description: "Pastikan format email sudah benar.",
    },
  };

const loginToastMap: Record<LoginToastKey, ToastConfig> = {
  loginEmailRequired: {
    type: "error",
    id: "login-email-required",
    title: "Email Tidak Boleh Kosong!",
    description: "Masukkan email terlebih dahulu.",
  },
  loginEmailInvalid: {
    type: "warning",
    id: "login-email-invalid",
    title: "Format email tidak valid",
    description: "Pastikan format email sudah benar.",
  },
  loginPasswordRequired: {
    type: "error",
    id: "login-password-required",
    title: "Password Tidak Boleh Kosong!",
    description: "Masukkan password terlebih dahulu.",
  },
};

const resetPasswordToastMap: Record<ResetPasswordToastKey, ToastConfig> = {
  tokenRequired: {
    type: "error",
    id: "reset-password-token-required",
    title: "Token tidak ditemukan",
    description: "Gunakan link reset password yang valid.",
  },
  passwordRequired: {
    type: "error",
    id: "reset-password-required",
    title: "Password Tidak Boleh Kosong!",
    description: "Masukkan password baru terlebih dahulu.",
  },
  confirmPasswordRequired: {
    type: "error",
    id: "reset-confirm-password-required",
    title: "Konfirmasi Password Tidak Boleh Kosong!",
    description: "Masukkan konfirmasi password terlebih dahulu.",
  },
  passwordMinLength: {
    type: "error",
    id: "reset-password-min-length",
    title: "Password terlalu pendek",
    description: "Password minimal 8 karakter.",
  },
  passwordMaxLength: {
    type: "warning",
    id: "reset-password-max-length",
    title: "Password terlalu panjang",
    description: "Password maksimal 50 karakter.",
  },
  passwordMismatch: {
    type: "error",
    id: "reset-password-mismatch",
    title: "Password Tidak Sama!",
    description: "Pastikan konfirmasi kata sandi sesuai.",
  },
  resetFailed: {
    type: "error",
    id: "reset-password-failed",
    title: "Gagal reset password",
    description: "Silakan coba lagi dalam beberapa saat.",
  },
  resetSuccess: {
    type: "success",
    id: "reset-password-success",
    title: "Reset password berhasil",
    description: "Silakan login dengan password baru Anda.",
  },
};

const forgotPasswordToastMap: Record<ForgotPasswordToastKey, ToastConfig> = {
  emailRequired: {
    type: "error",
    id: "forgot-password-email-required",
    title: "Email Tidak Boleh Kosong!",
    description: "Masukkan email terlebih dahulu.",
  },
  emailInvalid: {
    type: "warning",
    id: "forgot-password-email-invalid",
    title: "Format email tidak valid",
    description: "Pastikan format email sudah benar.",
  },
  forgotFailed: {
    type: "error",
    id: "forgot-password-failed",
    title: "Gagal mengirim permintaan",
    description: "Silakan coba lagi dalam beberapa saat.",
  },
  forgotSuccess: {
    type: "success",
    id: "forgot-password-success",
    title: "Permintaan berhasil dikirim",
    description: "Silakan cek email Anda untuk langkah selanjutnya.",
  },
};

const formSectionToastMap: Record<FormSectionToastKey, ToastConfig> = {
  categoryRequired: {
    type: "error",
    id: "form-category-required",
    title: "Kategori wajib dipilih",
    description: "Pilih kategori terlebih dahulu sebelum melanjutkan.",
  },
  questionRequired: {
    type: "error",
    id: "form-question-required",
    title: "Pertanyaan wajib belum lengkap",
    description: "Lengkapi jawaban yang wajib diisi terlebih dahulu.",
  },
  identitasRequired: {
    type: "error",
    id: "form-identitas-required",
    title: "Data identitas belum lengkap",
    description: "Lengkapi identitas usaha terlebih dahulu.",
  },
};

function showToast(config: ToastConfig) {
  if (config.type === "success") {
    toast.success(config.title, {
      id: config.id,
      description: config.description,
    });
    return;
  }

  if (config.type === "warning") {
    toast.warning(config.title, {
      id: config.id,
      description: config.description,
    });
    return;
  }

  toast.error(config.title, {
    id: config.id,
    description: config.description,
  });
}

export function showPasswordToast(key: PasswordToastKey) {
  showToast(passwordToastMap[key]);
}

export function showRegisterRequiredToast(key: RegisterRequiredToastKey) {
  showToast(registerRequiredToastMap[key]);
}

export function showLoginToast(key: LoginToastKey) {
  showToast(loginToastMap[key]);
}

export function showResetPasswordToast(
  key: ResetPasswordToastKey,
  description?: string,
) {
  const config = resetPasswordToastMap[key];

  if (!description || key !== "resetFailed") {
    showToast(config);
    return;
  }

  showToast({
    ...config,
    description,
  });
}

export function showForgotPasswordToast(
  key: ForgotPasswordToastKey,
  description?: string,
) {
  const config = forgotPasswordToastMap[key];

  if (!description || (key !== "forgotFailed" && key !== "forgotSuccess")) {
    showToast(config);
    return;
  }

  showToast({
    ...config,
    description,
  });
}

export function showFormSectionToast(
  key: FormSectionToastKey,
  description?: string,
) {
  const config = formSectionToastMap[key];

  if (!description) {
    showToast(config);
    return;
  }

  showToast({
    ...config,
    description,
  });
}

function isValidEmail(email: string) {
  // Cukup ketat untuk validasi form client-side umum.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function showEmailValidationToast(
  email: string,
  source: "login" | "register" = "login",
) {
  const trimmedEmail = email.trim();

  if (!trimmedEmail) {
    if (source === "register") {
      showRegisterRequiredToast("emailRequired");
      return false;
    }

    showLoginToast("loginEmailRequired");
    return false;
  }

  if (!isValidEmail(trimmedEmail)) {
    if (source === "register") {
      showRegisterRequiredToast("emailInvalid");
      return false;
    }

    showLoginToast("loginEmailInvalid");
    return false;
  }

  return true;
}
