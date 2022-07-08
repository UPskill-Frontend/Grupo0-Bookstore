import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { inject, injectable } from 'tsyringe';
import { IChartsController } from '../controllers/interfaces/IChartsController';

@injectable()
export class ChartsRoute {
    constructor(@inject('IChartsController') private controller: IChartsController) {}

    routes(app: Router) {
        app.get('/api/book/top', asyncHandler(this.controller.getTopTenSales));
        app.get('/api/book/new', asyncHandler(this.controller.getNewest));
    }
}
