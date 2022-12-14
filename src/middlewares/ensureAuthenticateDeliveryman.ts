import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateDeliveryman(request: Request, response: Response, next: NextFunction,) {
  const authHeader = request.headers.authorization; //token que vai vim do meu authorization

  if (!authHeader) {
    return response.status(401).json({ message: 'Token missing' });
  }

  //Bearer + token
  //[1] Bearer
  //[2] Token

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(token, '739f8ebd49733227a132c34fe866bc09') as IPayload;

    request.id_deliveryman = sub;

    return next();
  } catch (error) {
    return response.status(401).json({ message: 'Invalid token!' });
  }
}