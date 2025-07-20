import {
  Controller,
  Post,
  Route,
  Body,
  Security,
  Tags,
  Request,
  Get,
} from "tsoa";
import { auth, admin } from "server/src/business-layer/security/Firebase"
import { StatusCodes } from "http-status-codes";
import type { LoginRequest } from "server/src/service-layer/request-models/AuthRequest";
import type { LoginResponse } from "server/src/service-layer/response-models/AuthResponse";

@Route("auth")
@Tags("auth")
export class AuthController extends Controller {
  @Post("login")
  public async login(@Body() requestBody: LoginRequest): Promise<LoginResponse> {
    try {
      const userCredential = await admin.auth().getUserByEmail(requestBody.email);
      const token = await admin.auth().createCustomToken(userCredential.uid);

      return {
        token,
        user: {
          uid: userCredential.uid,
          email: userCredential.email,
          displayName: userCredential.displayName,
        }
      }
    } catch (error) {
      console.error("login error:", error)
      this.setStatus(StatusCodes.UNAUTHORIZED)
      return {
        error: "Invalid email or password"
      }
    }
  }
}
