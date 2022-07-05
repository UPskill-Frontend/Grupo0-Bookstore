import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { inject, injectable } from 'tsyringe';
import { IAuthorController } from '../controllers/interfaces/IAuthorController';

@injectable()
export class AuthorRoute {
    constructor(@inject('IAuthorController') private controller: IAuthorController) {}

    routes(app: Router) {
        app.post('/api/author', asyncHandler(this.controller.post));
    }
}
