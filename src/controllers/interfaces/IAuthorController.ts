import { NextFunction, Request, Response } from 'express';

interface IAuthorController {
    post: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

export { IAuthorController };
