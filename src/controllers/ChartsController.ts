import { NextFunction, Request, Response } from 'express';
import IChartsDTO from '../dtos/IChartsDTO';
import { IChartsController } from './interfaces/IChartsController';
import IChartsService from '../services/interfaces/IChartsService';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ChartsController implements IChartsController {
    constructor(@inject('IChartsService') private chartsService: IChartsService) {}

    getTopTenSales = async (req: Request, res: Response, next: NextFunction) => {
        const salesList = await this.chartsService.getTopTenSales();
        res.status(200).send(salesList);
    };

    getNewest = async (req: Request, res: Response, next: NextFunction) => {
        res.status(200).send();
    };
}
