import Publisher from '../../domain/Publisher';

export default interface IPublisherRepository {
    create: (publisher: Publisher) => Promise<Publisher>;
    findPublisherById: (id: string) => Promise<Publisher | null>;
}
