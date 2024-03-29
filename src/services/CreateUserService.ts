import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
	name: string;
	email: string;
	password: string;
	admin?: boolean;
}

class CreateUserService {
	async execute({ name, email, password, admin = false }: IUserRequest) {
		const usersRepository = getCustomRepository(UsersRepositories);

		if (!email) {
			throw new Error("Invalid email");
		}

		const userAlreadyExists = await usersRepository.findOne({
			email,
		});

		if (userAlreadyExists) {
			throw new Error("User already exists!");
		}

		const passwordHash = await hash(password, 8);

		const user = usersRepository.create({
			name,
			email,
			password: passwordHash,
			admin,
		});

		await usersRepository.save(user);

		return user;
	}
}

export { CreateUserService };
