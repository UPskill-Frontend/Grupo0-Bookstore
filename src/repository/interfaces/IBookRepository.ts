import { Book } from '../../domain/Book';

export default interface IBookRepository {
    create: (book: Book) => Promise<Book>;
    getByPublisher: (id: string) => Promise<Book[]>;
}
