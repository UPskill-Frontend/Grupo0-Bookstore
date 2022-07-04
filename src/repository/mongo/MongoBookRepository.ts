import IBookRepository from '../interfaces/IBookRepository';
import { Book } from '../../domain/Book';
import { BookMapper } from '../../mappers/BookMapper';
import { BookSchema } from '../../persistence/schemas/bookSchema';
export class MongoBookRepository implements IBookRepository {
    create = async (book: Book) => {
        const t = BookMapper.toBookPersistence(book);
        const newBook = await BookSchema.create(t);
        return BookMapper.toDomain(newBook);
    };
}
