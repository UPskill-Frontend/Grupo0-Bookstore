import { NextFunction, Request, Response } from 'express';

interface IBookController {
    post: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    orderBook: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    sell: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getByPublisher: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getBooksByISBN: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getByAuthor: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

export { IBookController };
