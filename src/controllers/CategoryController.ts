import { NextFunction, Request, Response } from 'express';
import { IRecommendationDTO } from '../dtos/ICategory';
import { IRecommendationService } from '../services/ICategoryService';
import RecommendationService from '../services/CategoryService';
import { IRecommendationController } from './ICategoryController';

export class RecommendationController implements IRecommendationController {
    constructor(private recommendationService: IRecommendationService = new RecommendationService()) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const dto: IRecommendationDTO = {
                ...req.body,
                recommendationDate: new Date(req.body.recommendationDate),
            };

            res.status(201).json(await this.recommendationService.createRecommendation(dto));
        } catch (error) {
            res.status(400).send(JSON.stringify(error));
        }
    };

    put = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const dto: IRecommendationDTO = {
                ...req.body,
                recommendationDate: new Date(req.body.recommendationDate),
            };

            res.status(201).json(await this.recommendationService.updateRecommendation(req.params.id, dto));
        } catch (error) {
            res.status(400).send(JSON.stringify(error));
        }
    };

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            (await this.recommendationService.deleteRecommendation(req.params.id))
                ? res.send(`Recommendation ${req.params.id} deleted`)
                : res.status(400).send(`${req.params.id} not found`);
        } catch (error) {
            res.status(400).send(JSON.stringify(error));
        }
    };

    get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.json(await this.recommendationService.getRecommendations());
        } catch (error) {
            res.status(400).send(JSON.stringify(error));
        }
    };

    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.json(await this.recommendationService.getRecommendationByID(req.params.id));
        } catch (error) {
            res.status(400).send(JSON.stringify(error));
        }
    };
}
