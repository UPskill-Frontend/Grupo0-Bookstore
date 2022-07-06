import ILoginDTO from '../dtos/ILoginDTO';
import IUserDTO from '../dtos/IUserDTO';
import Passwords from '../helpers/passwords';
import UserMappers from '../mappers/UserMappers';
import IUserRepository from '../repository/interfaces/IUserRepository';
import MongoUserRepository from '../repository/mongo/MongoUserRepository';
import IUserService from './interfaces/IUserService';

export default class UserService implements IUserService {
    constructor(private userRepository: IUserRepository = new MongoUserRepository()) {}

    async createUser(userDto: IUserDTO): Promise<IUserDTO> {
        const userDom = UserMappers.toDomain(userDto);
        userDom.password = Passwords.hash(userDom.password);
        return UserMappers.toDTO(await this.userRepository.createUser(userDom));
    }

    async validateUser(login: ILoginDTO): Promise<IUserDTO> {
        const user = await this.userRepository.getUserByEmail(login.email);
        if (!Passwords.compare(login.password, user.password)) {
            throw new Error('Invalid password or email');
        }

        return UserMappers.toDTO(user);
    }
}
