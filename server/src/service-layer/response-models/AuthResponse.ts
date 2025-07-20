// import type { CommonResponse } from './CommonResponse'

export interface AuthUserData {
  uid: string;
  email: string;
  displayName?: string;
}

export interface VerifyResponse {
  success: boolean;
  user?: {
    uid: string;
    email: string;
    displayName: string;
  }
  error?: string;
}
