import { NextFunction, Request, Response } from 'express';
import { ICategoryController } from './interfaces/ICategoryController';
import ICategoryDTO from '../dtos/ICategoryDTO';
import ICategoryService from '../services/interfaces/ICategoryService';
import { CategoryService } from '../services/CategoryService';

export class CategoryController implements ICategoryController {
    constructor(private categoryService: ICategoryService = new CategoryService()) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const categoryDto: ICategoryDTO = req.body;
            res.status(201).json(await this.categoryService.createCategory(categoryDto));
        } catch (error) {
            res.status(400).send(JSON.stringify(error));
        }
    };
}
