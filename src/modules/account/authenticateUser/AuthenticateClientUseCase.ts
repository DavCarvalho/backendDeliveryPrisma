import { prisma } from "../../../../database/PrismaClient";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AutheticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    //Receber username e password

    //verificar se username esta cadastrado
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    });

    if (!client) {
      throw new Error("Username or password incorect!");
    }

    //verificar se senha corresponde ao username
    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or password incorect!");
    }
    //gerar o token
    const token = sign({ username }, "019acc25a4e242bb55ad489832ada12d", {
      subject: client.id,
      expiresIn: "1d"
    });

    return token;
  }
}