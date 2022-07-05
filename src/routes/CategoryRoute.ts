import { Router } from 'express';
import { ICategoryController } from '../controllers/interfaces/ICategoryController';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CategoryRoute {
    constructor(@inject('ICategoryController') private controller: ICategoryController) {}

    routes(app: Router) {
        app.post('/api/category/', this.controller.post);
    }
}
