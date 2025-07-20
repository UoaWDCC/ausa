// import type { CommonResponse } from './CommonResponse'

import { User } from "data-layer/models/User";

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

export interface SignupResponse{
  success: boolean;
  user?: User;
  error?: string;
}