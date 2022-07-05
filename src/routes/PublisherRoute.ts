import { Router } from 'express';
import { inject, injectable } from 'tsyringe';
import { IPublisherController } from '../controllers/interfaces/IPublisherController';

@injectable()
export class PublisherRoute {
    constructor(@inject('IPublisherController') private controller: IPublisherController) {}

    routes(app: Router) {
        app.post('/api/publisher', this.controller.post);
    }
}
