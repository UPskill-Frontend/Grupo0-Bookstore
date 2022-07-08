import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { inject, injectable } from 'tsyringe';
import { IUserController } from '../controllers/interfaces/IUserController';
import { UserController } from '../controllers/UserController';

@injectable()
export class UserRoute {
    constructor(@inject('UserController') private controller: IUserController) {}

    routes(app: Router) {
        app.post('/api/register', asyncHandler(this.controller.register));
        app.post('/api/login', asyncHandler(this.controller.login));
    }
}
