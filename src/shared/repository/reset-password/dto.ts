export interface IResetPasswordRequest {
  token: string;
  new_password: string;
  confirm_password: string;
}

export interface IResetPasswordResponse {
  success: boolean;
  message: string;
}

export interface IForgotPasswordRequest {
  email: string;
}

export interface IForgotPasswordResponse {
  success: boolean;
  message: string;
}

