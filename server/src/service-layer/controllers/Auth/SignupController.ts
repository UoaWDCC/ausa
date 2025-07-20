import type { SignupRequest } from "server/src/service-layer/request-models/AuthRequest"
import type { SignupResponse } from "server/src/service-layer/response-models/AuthResponse"
import { auth } from "server/src/business-layer/security/Firebase"
import type { User } from "data-layer/models/User"
import { Controller, Route, Post, SuccessResponse, Body } from "tsoa"

@Route("auth")
export class SignupController extends Controller {
  @SuccessResponse("201", "Signed up and created user")
  @Post("signup")
  public async signup(
    @Body() requestBody: SignupRequest
  ): Promise<SignupResponse> {
    try {
      const userRecord = await auth.createUser({
        email: requestBody.email,
        password: requestBody.password,
        displayName: requestBody.name,
      })

      const user: User = {
        id: userRecord.uid,
        email: userRecord.email,
        name: requestBody.name,
        username: requestBody.username,
      }

      this.setStatus(201)
      console.log("User signed up successfully:", user)
      return {
        success: true,
        user,
      }
    } catch (error) {
      this.setStatus(400)
      console.error("Error signing up user:", error)
      return {
        success: false,
        error: (error as Error).message,
      }
    }
  }
}