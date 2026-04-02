import type { Roles } from "@/shared/lib/auth/role";

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  refresh_token: string;
  user: {
    user_id: string;
    name: string;
    email: string;
    role: Roles;
  };
}
