import { Book } from '../../domain/Book';

export default interface IBookRepository {
    create: (book: Book) => Promise<Book>;
    // getAll: () => Promise<Doctor[]>;
    // getById: (id: string) => Promise<Doctor>;
    // delete: (id: string) => Promise<boolean>;
}
