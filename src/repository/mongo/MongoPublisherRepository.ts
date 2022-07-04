import IPublisherRepository from '../interfaces/IPublisherRepository';
import publisherModel from '../../persistence/schemas/publisherSchema';
import PublisherMapper from '../../mappers/PublisherMapper';
import Publisher from '../../domain/Publisher';

export default class MongoPublisherRepository implements IPublisherRepository {
    create = async (publisher: Publisher) => {
        const publisherPers = PublisherMapper.toPersistence(publisher);
        return PublisherMapper.toDomain(await publisherModel.create(publisherPers));
    };
}
