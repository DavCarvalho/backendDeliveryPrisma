
import { prisma } from '../../../database/prismaClient';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    //Receber username e password

    //verificar se username esta cadastrado
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error('Username or password invalid!');
    }

    //verificar se senha corresponde ao username
    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error('Username or password invalid!');
    }

    //gerar o token
    const token = sign({ username }, '739f8ebd49733117a132c34fe866bc09', {
      subject: client.id,
      expiresIn: '1d',
    });

    return token;
  }
}