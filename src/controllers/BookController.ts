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

    sell = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bookISBN: string = req.params.isbn;
            const book = await this.bookService.sellBook(bookISBN);

            if (!book) res.status(400).json({ msg: 'No book in stock' });
            res.status(200).json(book);
        } catch (error) {
            res.status(400).send({ error });
        }
    };
}
