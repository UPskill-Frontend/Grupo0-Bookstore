import User from '../../domain/User';
import UserMappers from '../../mappers/UserMappers';
import { UserModel } from '../../persistence/schemas/userSchema';
import IUserRepository from '../interfaces/IUserRepository';

export default class MongoUserRepository implements IUserRepository {
    constructor(private userModel = UserModel) {}

    createUser = async (user: User) => {
        const userPers = UserMappers.toPersistence(user);
        return UserMappers.toDomain(await this.userModel.create(userPers));
    };

    getUserByEmail = async (email: string) => {
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new Error('Password or email is incorrect');
        }

        return UserMappers.toDomain(user);
    };
}
