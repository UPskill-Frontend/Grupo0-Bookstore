import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { ICategoryController } from '../controllers/interfaces/ICategoryController';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CategoryRoute {
    constructor(@inject('ICategoryController') private controller: ICategoryController) {}

    routes(app: Router) {
        app.post('/api/category/', asyncHandler(this.controller.post));
        app.delete('/api/category/:categoryCode', asyncHandler(this.controller.delete));
    }
}
