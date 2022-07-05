import { IPublisherController } from './interfaces/IPublisherController';
import { NextFunction, Request, Response } from 'express';
import IPublisherDTO from '../dtos/IPublisherDTO';
import IPublisherService from '../services/interfaces/IPublisherService';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class PublisherController implements IPublisherController {
    constructor(@inject('IPublisherService') private publisherService: IPublisherService) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        const publisherDTO: IPublisherDTO = req.body;
        res.status(201).json(await this.publisherService.createPublisher(publisherDTO));
    };
}
