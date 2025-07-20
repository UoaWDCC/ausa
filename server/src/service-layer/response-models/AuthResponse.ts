import type { CommonResponse } from './CommonResponse'

export interface AuthUserData {
  uid: string;
  email: string;
  displayName?: string;
}

export interface LoginResponse extends CommonResponse {
  token?: string;
  user?: AuthUserData;
}

export interface RegisterResponse extends CommonResponse {
  token?: string;
  user?: AuthUserData;
}
