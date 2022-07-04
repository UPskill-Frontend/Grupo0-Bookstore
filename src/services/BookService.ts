import IBookDTO from '../dtos/IBookDTO';
import IBookService from './interfaces/IBookService';
import { BookMapper } from '../mappers/BookMapper';
import IBookRepository from '../repository/interfaces/IBookRepository';
import { MongoBookRepository } from '../repository/mongo/MongoBookRepository';

export class BookService implements IBookService {
    constructor(private bookRepository: IBookRepository = new MongoBookRepository()) {}

    createBook = async (bookDto: IBookDTO) => {
        const bookPers = await this.bookRepository.create(BookMapper.toDomain(bookDto));
        return BookMapper.toBookDTO(bookPers);
    };

    getBooksByISBN = async (isbn: string) => {
        return BookMapper.toBookDTO(await this.bookRepository.findByISBN(isbn));
    };
}
