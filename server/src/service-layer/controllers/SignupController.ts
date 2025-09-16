import UserService from 'data-layer/services/UserDataService'
import { StatusCodes } from 'http-status-codes'
import { Body, Controller, Post, Route, SuccessResponse } from 'tsoa'
import type { UserSignupBody } from '../request-models/UserSignupRequests'
import type { UserSignupResponse } from '../response-models/UserSignupResponse'

@Route('signup')
export class UserSignup extends Controller {
  /**
   * Signs up a user and creates a user record in the database. Also creates a JWT token for the user in AuthService.
   * @param requestBody - The user's email and their user additional info.
   * @returns The JWT token and the user's UID.
   */
  @Post()
  @SuccessResponse(200, 'Signup successful')
  public async signup(
    @Body() requestBody: UserSignupBody,
  ): Promise<UserSignupResponse> {
    const userService = new UserService()
    // Received userInfo omits stripe_id
    const userInfo = requestBody.user
    try {
      await userService.createUserData(userInfo.id, userInfo)
      this.setStatus(StatusCodes.OK)
      return { uid: userInfo.id }
    } catch (e) {
      console.error(e)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR) // server error
      const errorMessage =
        e instanceof Error ? e.message : 'Failed to save user'
      return { error: errorMessage }
    }
  }
}
