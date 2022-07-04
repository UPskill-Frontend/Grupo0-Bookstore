import { Router } from 'express';
import { ICategoryController } from '../controllers/interfaces/ICategoryController';
import { CategoryController } from '../controllers/CategoryController';

export class CategoryRoute {
    constructor(private controller: ICategoryController = new CategoryController()) {}

    routes(app: Router) {
        app.post('/api/category/', this.controller.post);
    }
}
