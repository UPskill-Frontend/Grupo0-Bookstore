import { IPublisherController } from './interfaces/IPublisherController';
import { NextFunction, Request, Response } from 'express';
import IPublisherDTO from '../dtos/IPublisherDTO';
import IPublisherService from '../services/interfaces/IPublisherService';
import PublisherService from '../services/PublisherService';

export default class PublisherController implements IPublisherController {
    constructor(private publisherService: IPublisherService = new PublisherService()) {}

    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const publisherDTO: IPublisherDTO = req.body;
            res.send(await this.publisherService.createPublisher(publisherDTO));
        } catch (error) {
            res.send(400).send({ error });
        }
    };
}
