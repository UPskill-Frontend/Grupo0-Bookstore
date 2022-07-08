import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { inject, injectable } from 'tsyringe';
import { IPublisherController } from '../controllers/interfaces/IPublisherController';
import Role from '../enums/Roles';
import authMiddleware from '../middlewares/authMiddleware';

@injectable()
export class PublisherRoute {
    constructor(@inject('PublisherController') private controller: IPublisherController) {}

    routes(app: Router) {
        app.post('/api/publisher', authMiddleware([Role.ADMIN]), asyncHandler(this.controller.post));
    }
}
