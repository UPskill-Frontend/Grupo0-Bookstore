import { NextFunction, Request, Response } from 'express';

interface IBookController {
    post: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    orderBook: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

export { IBookController };
