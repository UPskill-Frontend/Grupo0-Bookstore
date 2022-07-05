import { Author } from '../../domain/Author';

export default interface IAuthorRepository {
    create: (authorDomain: Author) => Promise<Author>;
    findAuthorById: (id: string) => Promise<Author | null>;
}
