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

    findByISBN = async (isbn: string) => {
        const book = await BookSchema.findOne({ isbn });
        if (!book) {
            return null;
        }
        return BookMapper.toDomain(book);
    };

    updateStock = async (isbn: string, stock: number) => {
        const book = await BookSchema.findOneAndUpdate({ isbn }, { stock }, { new: true });
        if (!book) {
            throw new Error('Book does not exist');
        }
        return BookMapper.toDomain(book);
    };
}
