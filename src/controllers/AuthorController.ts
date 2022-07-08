import { NextFunction, Request, Response } from 'express';
import IAuthorDTO from '../dtos/IAuthorDTO';
import { IAuthorController } from './interfaces/IAuthorController';
import IAuthorService from '../services/interfaces/IAuthorService';
import { inject, injectable } from 'tsyringe';

@injectable()
export class AuthorController implements IAuthorController {
    constructor(@inject('AuthorService') private authorService: IAuthorService) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        const authorDto: IAuthorDTO = req.body;
        res.status(201).json(await this.authorService.createAuthor(authorDto));
    };
}
