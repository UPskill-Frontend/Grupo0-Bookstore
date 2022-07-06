import IUserPersistence from '../../dataSchema/IUserPersistence';

export default interface IUserRepository {
    createUser(user: IUserPersistence): Promise<IUserPersistence>;
    getUserByEmail(email: string): Promise<IUserPersistence>;
}
