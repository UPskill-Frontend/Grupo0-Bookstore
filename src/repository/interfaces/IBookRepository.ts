import { Book } from '../../domain/Book';

export default interface IBookRepository {
    create: (book: Book) => Promise<Book>;
    sell: (isbn: string) => Promise<Book | null>;
}
