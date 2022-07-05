import { Book } from '../../domain/Book';

export default interface IBookRepository {
    create: (book: Book) => Promise<Book>;
    findByISBN: (isbn: string) => Promise<Book | null>;
    updateStock: (isbn: string, stock: number) => Promise<Book>;
    getByPublisher: (id: string) => Promise<Book[]>;
    sell: (isbn: string) => Promise<Book | null>;
}
