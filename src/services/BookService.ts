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

    getBookByPublisher = async (id: string) => {
        if (!this.publisherService.publisherExists(id)) {
            throw new Error('Publisher doesnt exist');
        }
        const book = await this.bookRepository.getByPublisher(id);
        return book.map((x) => BookMapper.toBookDTO(x));
    };
}
