import { Author } from '../../domain/Author';
import { AuthorMapper } from '../../mappers/AuthorMapper';
import { AuthorSchema } from '../../persistence/schemas/authorSchema';
import IAuthorRepository from '../interfaces/IAuthorRepository';

export class MongoAuthorRepository implements IAuthorRepository {
    create = async (author: Author) => {
        const newAuthor = await AuthorSchema.create(AuthorMapper.toPersistence(author));
        return AuthorMapper.toDomain(newAuthor);
    };
}
