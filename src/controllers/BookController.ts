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
            res.status(400).send({ error });
        }
    };

    orderBook = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const isbn: string = req.params.isbn;
            const bookDTO: IBookDTO = { ...req.body, isbn };

            res.status(200).json(await this.bookService.orderBook(bookDTO));
        } catch (error) {
            res.status(400).send({ error });
        }
    };

    getBooksByISBN = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.json(await this.bookService.getBooksByISBN(req.params.isbn));
        } catch (error) {
            res.status(400).send(JSON.stringify(error));
        }
    };
}
