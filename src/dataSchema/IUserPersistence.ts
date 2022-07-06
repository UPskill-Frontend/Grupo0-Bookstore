import Role from '../enums/Roles';

export default interface IUserPersistence {
    role: Role;
    name?: string;
    email: string;
    password: string;
}
