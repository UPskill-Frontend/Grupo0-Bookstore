import IBookRepository from '../interfaces/IBookRepository';
import { Book } from '../../domain/Book';
import { BookMapper } from '../../mappers/BookMapper';
import { BookSchema } from '../../persistence/schemas/bookSchema';
export class MongoBookRepository implements IBookRepository {
    create = async (book: Book) => {
        const newBook = await BookSchema.create(BookMapper.toBookPersistence(book));
        return BookMapper.toDomain(newBook);
    };
}
