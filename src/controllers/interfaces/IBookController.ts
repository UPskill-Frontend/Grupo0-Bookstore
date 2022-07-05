import { NextFunction, Request, Response } from 'express';

interface IBookController {
    post: (req: Request, res: Response, next: NextFunction) => Promise<void>;

    orderBook: (req: Request, res: Response, next: NextFunction) => Promise<void>;

    sell: (req: Request, res: Response, next: NextFunction) => Promise<void>;

    // delete: (req: Request, res: Response, next: NextFunction) => Promise<void>;

    // get: (req: Request, res: Response, next: NextFunction) => Promise<void>;

    getById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

export { IBookController };
