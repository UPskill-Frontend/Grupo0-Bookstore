import { NextFunction, Request, Response } from 'express';
import IBookDTO from '../dtos/IBookDTO';
import { IBookController } from './interfaces/IBookController';
import IBookService from '../services/interfaces/IBookService';
import { BookService } from '../services/BookService';

export class BookController implements IBookController {
    constructor(private bookService: IBookService = new BookService()) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bookDto: IBookDTO = req.body;

            res.status(201).json(await this.bookService.createBook(bookDto));
        } catch (error) {
            res.status(400).send(JSON.stringify(error));
        }
    };

    // put = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         const dto: IRecommendationDTO = {
    //             ...req.body,
    //             recommendationDate: new Date(req.body.recommendationDate),
    //         };

    //         res.status(201).json(await this.recommendationService.updateRecommendation(req.params.id, dto));
    //     } catch (error) {
    //         res.status(400).send(JSON.stringify(error));
    //     }
    // };

    // delete = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         (await this.recommendationService.deleteRecommendation(req.params.id))
    //             ? res.send(`Recommendation ${req.params.id} deleted`)
    //             : res.status(400).send(`${req.params.id} not found`);
    //     } catch (error) {
    //         res.status(400).send(JSON.stringify(error));
    //     }
    // };

    // get = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         res.json(await this.recommendationService.getRecommendations());
    //     } catch (error) {
    //         res.status(400).send(JSON.stringify(error));
    //     }
    // };

    getBooksByISBN = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.json(await this.bookService.getBooksByISBN(req.params.isbn));
        } catch (error) {
            res.status(400).send(JSON.stringify(error));
        }
    };
}
