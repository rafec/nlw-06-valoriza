import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
	email: string;
	password: string;
}

class AuthenticateUserService {
	async execute({ email, password }: IAuthenticateRequest) {
		const usersRepository = getCustomRepository(UsersRepositories);
		const user = await usersRepository.findOne({ email });

		if (!user) {
			throw new Error("Invalid email/password!");
		}

		const passwordMatch = await compare(password, user.password);

		if (!passwordMatch) {
			throw new Error("Invalid email/password!");
		}

		const token = sign(
			{
				email: user.email,
			},
			"2bc55ba6bedc8abd7a5bd8e6262fbd84",
			{ subject: user.id, expiresIn: "1d" }
		);

		return token;
	}
}

export { AuthenticateUserService };
