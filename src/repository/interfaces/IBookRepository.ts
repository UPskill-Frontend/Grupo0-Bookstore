import { Book } from '../../domain/Book';

export default interface IBookRepository {
    create: (book: Book) => Promise<Book>;
    findByISBN: (isbn: string) => Promise<Book | null>;
    updateStock: (isbn: string, stock: number) => Promise<Book>;
}
