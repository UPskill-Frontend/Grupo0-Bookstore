import { NextFunction, Request, Response } from 'express';

export interface IPublisherController {
    post: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
