import IPublisherDTO from '../dtos/IPublisherDTO';
import PublisherMapper from '../mappers/PublisherMapper';
import IPublisherService from './interfaces/IPublisherService';
import IPublisherRepository from '../repository/interfaces/IPublisherRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class PublisherService implements IPublisherService {
    constructor(@inject('PublisherRepository') private publisherRepository: IPublisherRepository) {}

    async createPublisher(publisherDTO: IPublisherDTO): Promise<IPublisherDTO> {
        const publisherDom = PublisherMapper.toDomain(publisherDTO);
        return PublisherMapper.toDTO(await this.publisherRepository.create(publisherDom));
    }

    async publisherExists(publisherCode: string): Promise<boolean> {
        const publisher = await this.publisherRepository.findPublisherById(publisherCode);
        return !!publisher;
    }
}
