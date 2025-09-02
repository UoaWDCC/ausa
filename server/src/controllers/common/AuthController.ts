
//This file contains the AuthController for handling authentication-related requests.

import {
  Body,
  Controller,
  Post,
  Route,
  SuccessResponse,
} from 'tsoa'
import { admin } from 'utils/Firebase'
import jwt from 'jsonwebtoken'
import { BadRequestException, InternalServerErrorException } from '@nestjs/common'

@Route('auth')
export class AuthController extends Controller {
  @Post('login')
  public async login(@Body() body: { email: string; password: string }) {
    // Verify user with Firebase Admin
    const user = await admin.auth().getUserByEmail(body.email)
    if (!user) throw new Error('Invalid credentials')

    // Optionally check password using custom DB if not using Firebase password
    // (Or verify using Firebase custom logic if needed)

    // Create JWT with role claim
    const token = jwt.sign(
      { uid: user.uid, role: user.customClaims?.role || 'user' },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' },
    )

    return { token }
  }

  @SuccessResponse('201', 'Created')
  @Post('signup')
  public async signup(
    @Body() body: { name: string; email: string; password: string },
  ) {
    try {
      const userRecord = await admin.auth().createUser({
        email: body.email,
        password: body.password,
        displayName: body.name,
      })

      // Assign default role
      await admin.auth().setCustomUserClaims(userRecord.uid, { role: 'user' })

      // create a custom token to send to the frontend
      const customToken = await admin.auth().createCustomToken(userRecord.uid)

      return {
        uid: userRecord.uid,
        email: userRecord.email,
        name: userRecord.displayName,
        customToken: customToken, // Send this back
      }
    } catch (error) {
      // Re-throw or handle the error in a way that framework understands
      // For example:
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        (error as any).code === 'auth/email-already-in-use'
      ) {
        throw new BadRequestException({
          message: 'Email already in use',
          code: 'auth/email-already-in-use',
        })
      }
      // ... and so on for other codes.
      throw new InternalServerErrorException({
        message: 'Failed to create user',
        code: 'auth/generic-error',
      })
    }
  }
} 