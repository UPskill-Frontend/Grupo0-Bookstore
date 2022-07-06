import Role from '../enums/Roles';

export default interface IUserDTO {
    name?: string;
    role: Role;
    email: string;
    password: string;
}
