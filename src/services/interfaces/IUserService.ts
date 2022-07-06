import ILoginDTO from '../../dtos/ILoginDTO';
import IUserDTO from '../../dtos/IUserDTO';

export default interface IUserService {
    createUser(userDto: IUserDTO): Promise<IUserDTO>;
    validateUser(login: ILoginDTO): Promise<IUserDTO>;
}
