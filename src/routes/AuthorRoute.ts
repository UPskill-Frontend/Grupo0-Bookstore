import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { inject, injectable } from 'tsyringe';
import { IAuthorController } from '../controllers/interfaces/IAuthorController';
import Role from '../enums/Roles';
import authMiddleware from '../middlewares/authMiddleware';

@injectable()
export class AuthorRoute {
    constructor(@inject('IAuthorController') private controller: IAuthorController) {}

    routes(app: Router) {
        app.post('/api/author', authMiddleware([Role.ADMIN]), asyncHandler(this.controller.post));
    }
}
