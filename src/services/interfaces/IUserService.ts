import ILoginDTO from '../../dtos/ILoginDTO';
import IUserDTO from '../../dtos/IUserDTO';

export default interface IUserService {
    createUser(userDto: IUserDTO): Promise<string>;
    validateUser(login: ILoginDTO): Promise<string>;
}
