import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsServices {
	async execute(user_id: string) {
		const complimentsRepository = getCustomRepository(ComplimentsRepositories);

		const compliments = await complimentsRepository.find({
			where: {
				user_sender: user_id,
			},
		});

		return compliments;
	}
}

export { ListUserSendComplimentsServices };
