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

    sell = async (isbn: string) => {
        const bookData = await BookSchema.findOne({ isbn: isbn });
        if (!bookData || bookData.stock === 0) return null;
        const newBook = await BookSchema.findOneAndUpdate(
            { isbn: bookData.isbn },
            { $inc: { stock: -1 } },
            { new: true }
        );
        return BookMapper.toDomain(newBook!);
    };
}
