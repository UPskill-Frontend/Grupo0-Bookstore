import IPublisherPersistence from '../dataSchema/IPublisherPersistence';
import Publisher from '../domain/Publisher';
import IPublisherDTO from '../dtos/IPublisherDTO';

export default class PublisherMapper {
    public static toDTO(publisher: Publisher): IPublisherDTO {
        if (publisher.publisherCode && publisher.publisherName) {
            return { publisherCode: publisher.publisherCode, publisherName: publisher.publisherName };
        } else {
            throw Error('Invalid Publisher DTO data');
        }
    }

    public static toDomain(publisher: IPublisherDTO): Publisher {
        return new Publisher(publisher);
    }

    public static toPersistence(publisher: Publisher): IPublisherPersistence {
        if (publisher.publisherCode && publisher.publisherName) {
            return { publisherCode: publisher.publisherCode, publisherName: publisher.publisherName };
        } else {
            throw Error('Invalid Publisher DTO data');
        }
    }
}
