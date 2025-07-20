import {
  Controller,
  Post,
  Route,
  Body,
  Tags,
  Get,
} from "tsoa";
import { auth } from "server/src/business-layer/security/Firebase"
import { StatusCodes } from "http-status-codes";
import type { VerifyRequest } from "server/src/service-layer/request-models/AuthRequest";
import type { VerifyResponse } from "server/src/service-layer/response-models/AuthResponse";

@Route("auth")
@Tags("auth")
export class AuthController extends Controller {
  @Get() 
  public async getAuthStatus(): Promise<{ authenticated: boolean }> {
    console.log("checking status")
    return { authenticated: false }; // Replace with actual authentication logic if needed
  }
  @Post("verify")
  public async verify(@Body() requestBody: VerifyRequest): Promise<VerifyResponse> {
    try {
      const decodedToken = await auth.verifyIdToken(requestBody.idToken);

      return {
        success: true,
        user: {
          uid: decodedToken.uid,
          email: decodedToken.email,
          displayName: decodedToken.displayName,
        }
      }
    } catch (error) {
      console.error("Token verification failed:", error)
      this.setStatus(StatusCodes.UNAUTHORIZED)
      return {
        success: false,
        error: "Invalid email or password"
      };
    }
  }
}
