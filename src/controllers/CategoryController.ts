import { NextFunction, Request, Response } from 'express';
import { ICategoryController } from './interfaces/ICategoryController';
import ICategoryDTO from '../dtos/ICategoryDTO';
import ICategoryService from '../services/interfaces/ICategoryService';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CategoryController implements ICategoryController {
    constructor(@inject('ICategoryService') private categoryService: ICategoryService) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        const categoryDto: ICategoryDTO = req.body;
        res.status(201).json(await this.categoryService.createCategory(categoryDto));
    };

    delete = async (req: Request, res: Response, next: NextFunction) => {
        const categoryCode: string = req.params.categoryCode;
        if (!(await this.categoryService.deleteCategory(categoryCode))) {
            throw new Error('Category cannot be deleted');
        }
        res.status(200).send('Category deleted');
    };
}
