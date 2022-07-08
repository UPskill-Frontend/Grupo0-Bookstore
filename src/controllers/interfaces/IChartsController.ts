import { NextFunction, Request, Response } from 'express';

interface IChartsController {
    getTopTenSales: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getNewest: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

export { IChartsController };
