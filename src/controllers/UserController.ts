import { NextFunction, Request, Response } from 'express';
import IUserDTO from '../dtos/IUserDTO';
import { IUserController } from './interfaces/IUserController';
import IUserService from '../services/interfaces/IUserService';
import Role from '../enums/Roles';
import ILoginDTO from '../dtos/ILoginDTO';
import UserService from '../services/UserService';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UserController implements IUserController {
    constructor(@inject('UserService') private userService: IUserService) {}

    register = async (req: Request, res: Response, next: NextFunction) => {
        const userDto: IUserDTO = { ...req.body, role: Role.CLIENT };
        const token = await this.userService.createUser(userDto);
        // add User jwt token
        res.status(201).json({ token });
    };

    login = async (req: Request, res: Response, next: NextFunction) => {
        const userLogin: ILoginDTO = { ...req.body };
        const token = await this.userService.validateUser(userLogin);
        // add User jwt token
        res.status(200).json({ token });
    };
}
