import { hash } from 'bcryptjs';
import { prisma } from '../../../../database/prismaClient';

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ password, username }: ICreateClient) {
    //Validar se o usuario existe
    const clientExists = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });

    if (clientExists) {
      throw new Error('Client already exists');
    }

    //criptopgrafar a senha
    const hashPassword = await hash(password, 10);

    //salvar o client
    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return client;
  }
}