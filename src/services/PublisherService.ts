import IPublisherDTO from '../dtos/IPublisherDTO';
import PublisherMapper from '../mappers/PublisherMapper';
import IPublisherService from './interfaces/IPublisherService';
import MongoPublisherRepository from '../repository/mongo/MongoPublisherRepository';
import IPublisherRepository from '../repository/interfaces/IPublisherRepository';

export default class PublisherService implements IPublisherService {
    constructor(private publisherRepository: IPublisherRepository = new MongoPublisherRepository()) {}

    async createPublisher(publisherDTO: IPublisherDTO): Promise<IPublisherDTO> {
        const publisherDom = PublisherMapper.toDomain(publisherDTO);
        let result = await this.publisherRepository.create(publisherDom);
        return PublisherMapper.toDTO(result);
    }

    async publisherExists(publisherCode: string): Promise<boolean> {
        const publisher = await this.publisherRepository.findPublisherById(publisherCode);
        return !!publisher;
    }
}
