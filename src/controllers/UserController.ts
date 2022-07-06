import { NextFunction, Request, Response } from 'express';
import IUserDTO from '../dtos/IUserDTO';
import { IUserController } from './interfaces/IUserController';
import IUserService from '../services/interfaces/IUserService';
import { inject, injectable } from 'tsyringe';
import Role from '../enums/Roles';
import ILoginDTO from '../dtos/ILoginDTO';

@injectable()
export class UserController implements IUserController {
    constructor(@inject('IUserService') private userService: IUserService) {}

    register = async (req: Request, res: Response, next: NextFunction) => {
        const userDto: IUserDTO = { ...req.body, role: Role.CLIENT };
        const user = await this.userService.createUser(userDto);
        // add User jwt token
        res.status(201).json({ message: 'user created' });
    };

    login = async (req: Request, res: Response, next: NextFunction) => {
        const userLogin: ILoginDTO = { ...req.body };
        const user = await this.userService.validateUser(userLogin);
        // add User jwt token
        res.status(200).json({ message: 'user logged in' });
    };
}
