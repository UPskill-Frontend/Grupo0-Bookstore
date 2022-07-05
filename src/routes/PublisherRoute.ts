import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { inject, injectable } from 'tsyringe';
import { IPublisherController } from '../controllers/interfaces/IPublisherController';

@injectable()
export class PublisherRoute {
    constructor(@inject('IPublisherController') private controller: IPublisherController) {}

    routes(app: Router) {
        app.post('/api/publisher', asyncHandler(this.controller.post));
    }
}
