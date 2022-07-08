import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { ICategoryController } from '../controllers/interfaces/ICategoryController';
import { inject, injectable, registry } from 'tsyringe';
import Role from '../enums/Roles';
import authMiddleware from '../middlewares/authMiddleware';

@injectable()
export class CategoryRoute {
    constructor(@inject('CategoryController') private controller: ICategoryController) {}

    routes(app: Router) {
        app.post('/api/category/', authMiddleware([Role.ADMIN]), asyncHandler(this.controller.post));
        app.delete('/api/category/:categoryCode', authMiddleware([Role.ADMIN]), asyncHandler(this.controller.delete));
    }
}
