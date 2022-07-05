import { Author } from '../../domain/Author';

export default interface IAuthorRepository {
    create: (authorDomain: Author) => Promise<Author>;
}
