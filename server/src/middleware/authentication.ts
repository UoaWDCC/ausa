//JWT authentication middleware, this file will contain the logic to verify and attach user information to the request object.

import { Request } from 'express';
import jwt from 'jsonwebtoken';

export async function expressAuthentication(
  request: Request,
  securityName: string
): Promise<any> {
  if (securityName === 'jwt') {
    const token = request.headers['authorization']?.split(' ')[1];
    if (!token) {
      throw new Error('No token provided');
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        id: string;
        role: 'user' | 'admin';
      };

      return decoded; // Will include role
    } catch {
      throw new Error('Invalid token');
    }
  }
  throw new Error('Unknown security method');
}
