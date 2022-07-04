import IPublisherDTO from '../../dtos/IPublisherDTO';

export default interface IPublisherService {
    createPublisher(publisherDTO: IPublisherDTO): Promise<IPublisherDTO>;
}
