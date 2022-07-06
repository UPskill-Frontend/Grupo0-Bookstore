import IUserPersistence from '../dataSchema/IUserPersistence';
import User from '../domain/User';
import IUserDTO from '../dtos/IUserDTO';

export default class UserMappers {
    public static toPersistence(user: User): IUserPersistence {
        if (user.email && user.password) {
            return { email: user.email, password: user.password, name: user.name, role: user.role };
        } else {
            throw Error('Invalid User DTO data');
        }
    }

    public static toDomain(user: IUserPersistence): User {
        return User.create(user.role, user.email, user.password, user.name);
    }

    public static toDTO(user: User): IUserDTO {
        if (user.email && user.password) {
            return { role: user.role, email: user.email, password: user.password, name: user.name };
        } else {
            throw Error('Invalid User DTO data');
        }
    }
}
