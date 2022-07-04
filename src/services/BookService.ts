import IBookDTO from '../dtos/IBookDTO';
import IBookService from './interfaces/IBookService';
import { BookMapper } from '../mappers/BookMapper';
import IBookRepository from '../repository/interfaces/IBookRepository';
import { MongoBookRepository } from '../repository/mongo/MongoBookRepository';
import ICategoryService from './interfaces/ICategoryService';
import { CategoryService } from './CategoryService';
import IPublisherService from './interfaces/IPublisherService';
import PublisherService from './PublisherService';

export class BookService implements IBookService {
    constructor(
        private bookRepository: IBookRepository = new MongoBookRepository(),
        private categoryService: ICategoryService = new CategoryService(),
        private publisherService: IPublisherService = new PublisherService()
    ) {}

    createBook = async (bookDto: IBookDTO) => {
        const [categoryExists, publisherExists] = await Promise.all([
            this.categoryService.categoryExists(bookDto.categoryCode),
            this.publisherService.publisherExists(bookDto.publisherCode),
        ]);

        if (!categoryExists) {
            throw new Error('Category does not exist');
        }

        if (!publisherExists) {
            throw new Error('Publisher does not exist');
        }

        const bookPers = await this.bookRepository.create(BookMapper.toDomain(bookDto));
        return BookMapper.toBookDTO(bookPers);
    };

    orderBook = async (bookDto: IBookDTO) => {
        const book = await this.bookRepository.findByISBN(bookDto.isbn);
        if (!book) {
            return BookMapper.toBookDTO(await this.createBook(BookMapper.toDomain(bookDto)));
        }

        return BookMapper.toBookDTO(await this.bookRepository.updateStock(book.isbn, book.stock + bookDto.stock));
    };
}
