
import { prisma } from '../../../../database/prismaClient';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    //Receber username e password

    //verificar se username esta cadastrado
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error('Username or password invalid!');
    }

    //verificar se senha corresponde ao username
    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error('Username or password invalid!');
    }

    //gerar o token
    const token = sign({ username }, '739f8ebd49733227a132c34fe866bc09', {
      subject: deliveryman.id,
      expiresIn: '1d',
    });

    return token;
  }
}