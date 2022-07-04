import IBookDTO from '../dtos/IBookDTO';
import IBookPersistence from '../dataSchema/IBookPersistence';
import { Book } from '../domain/Book';

export class BookMapper {
    public static toBookDTO(book: Book): IBookDTO {
        return {
            title: book.title,
            isbn: book.isbn,
            author: book.author,
            stock: book.stock,
            publisherCode: book.publisherCode,
            categoryCode: book.categoryCode,
        };
    }

    public static toBookPersistence(book: Book): IBookPersistence {
        return {
            title: book.title,
            isbn: book.isbn,
            author: book.author,
            stock: book.stock,
            publisherCode: book.publisherCode,
            categoryCode: book.categoryCode,
        };
    }

    public static toDomain(book: IBookDTO | IBookPersistence): Book {
        return Book.createBook(book);
    }
}
