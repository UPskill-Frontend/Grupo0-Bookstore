import IUserDTO from '../dtos/IUserDTO';
import jwt from 'jsonwebtoken';

export default class JWT {
    public static createToken(userDto: IUserDTO) {
        return jwt.sign(
            { email: userDto.email, name: userDto.name, role: userDto.role },
            process.env.ACESS_TOKEN_SECRET!,
            {
                expiresIn: '1h',
            }
        );
    }
}
