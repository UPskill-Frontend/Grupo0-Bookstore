import { NextFunction, Request, Response } from 'express';
import { ICategoryController } from './interfaces/ICategoryController';
import ICategoryDTO from '../dtos/ICategoryDTO';
import ICategoryService from '../services/interfaces/ICategoryService';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CategoryController implements ICategoryController {
    constructor(@inject('ICategoryService') private categoryService: ICategoryService) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const categoryDto: ICategoryDTO = req.body;
            res.status(201).json(await this.categoryService.createCategory(categoryDto));
        } catch (error) {
            res.status(400).send({ error });
        }
    };

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const categoryCode: string = req.params.categoryCode;
            (await this.categoryService.deleteCategory(categoryCode))
                ? res.status(200).send('Category deleted')
                : res.status(400).send({ error: 'Category cannot be deleted' });
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message });
            } else {
                res.status(400).send({ error });
            }
        }
    };
}
