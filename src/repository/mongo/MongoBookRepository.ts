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


    getByPublisher = async (id: string): Promise<Book[]> => {
        const bookList = await BookSchema.find({ publisherCode: id });
        return bookList.map((x) => BookMapper.toDomain(x));
}
    sell = async (isbn: string) => {
        const bookData = await BookSchema.findOne({ isbn: isbn, stock: { $gt: 0 } });
        if (!bookData) return null;
        const newBook = await BookSchema.findOneAndUpdate(
            { isbn: bookData.isbn },
            { $inc: { stock: -1 } },
            { new: true }
        );
        return BookMapper.toDomain(newBook!);

   }
}
