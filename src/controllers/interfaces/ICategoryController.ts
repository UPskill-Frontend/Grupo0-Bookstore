import { NextFunction, Request, Response } from 'express';

interface ICategoryController {
    post: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

export { ICategoryController };
