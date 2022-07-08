import { NextFunction, Request, Response } from 'express';
import { IChartsController } from './interfaces/IChartsController';
import IChartsService from '../services/interfaces/IChartsService';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ChartsController implements IChartsController {
    constructor(@inject('ChartsService') private chartsService: IChartsService) {}

    getTopTenSales = async (req: Request, res: Response, next: NextFunction) => {
        res.status(200).send(await this.chartsService.getTopTenSales());
    };

    getNewest = async (req: Request, res: Response, next: NextFunction) => {
        res.status(200).send(await this.chartsService.getNewest());
    };
}
