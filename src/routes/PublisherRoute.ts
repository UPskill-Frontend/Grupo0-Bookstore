import { Router } from 'express';
import PublisherController from '../controllers/PublisherController';
export class PublisherRoute {
    private controller: PublisherController;

    constructor() {
        this.controller = new PublisherController();
    }

    routes(app: Router) {
        app.post('/api/publisher', this.controller.post);
    }
}
