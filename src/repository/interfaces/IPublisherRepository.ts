import Publisher from '../../domain/Publisher';

export default interface IPublisherRepository {
    create: (publisher: Publisher) => Promise<Publisher>;
}
