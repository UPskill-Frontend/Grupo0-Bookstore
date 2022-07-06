import Role from '../enums/Roles';

export default class User {
    private constructor(public role: Role, public email: string, public password: string, public name?: string) {}

    public static create(role: Role, email: string, password: string, name?: string): User {
        if (!email || !password || !role) {
            throw new Error('Email and password are required');
        }

        return new User(role, email, password, name);
    }
}
