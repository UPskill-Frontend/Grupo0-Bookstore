import { NextFunction, Request, Response } from 'express';
import IBookDTO from '../dtos/IBookDTO';
import { IBookController } from './interfaces/IBookController';
import IBookService from '../services/interfaces/IBookService';
import { inject, injectable } from 'tsyringe';

@injectable()
export class BookController implements IBookController {
    constructor(@inject('IBookService') private bookService: IBookService) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bookDto: IBookDTO = req.body;

            res.status(201).json(await this.bookService.createBook(bookDto));
        } catch (error) {
            res.status(400).send({ error });
        }
    };

    orderBook = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const isbn: string = req.params.isbn;
            const bookDTO: IBookDTO = { ...req.body, isbn };

            res.status(200).json(await this.bookService.orderBook(bookDTO));
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send({ error: error.message });
            } else {
                res.status(400).send({ error });
            }
        }
    };

    getBooksByISBN = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const book = await this.bookService.getBooksByISBN(req.params.isbn);
            if (book) {
                res.json(book);
            } else {
                res.status(400).json({
                    message: 'The book with the provided ISBN is not available or is inexistent.',
                });
            }
        } catch (error) {
            res.status(400).send(JSON.stringify(error));
        }
    };
    getByPublisher = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.json(await this.bookService.getBookByPublisher(req.params.id));
        } catch (error) {
            res.status(400).send(JSON.stringify(error));
        }
    };

    sell = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bookISBN: string = req.params.isbn;
            const sellCheck = await this.bookService.sellBook(bookISBN);
            if (!sellCheck) res.status(400).send({ msg: 'No stock for the book selected' });
            else res.status(200).json(sellCheck);
        } catch (error) {
            res.status(400).send({ error });
        }
    };
}
