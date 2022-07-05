import ICategoryDTO from '../dtos/ICategoryDTO';
import { CategoryMapper } from '../mappers/CategoryMapper';
import IBookRepository from '../repository/interfaces/IBookRepository';
import ICategoryRepository from '../repository/interfaces/ICategoryRepository';
import { MongoBookRepository } from '../repository/mongo/MongoBookRepository';
import { MongoCategoryRepository } from '../repository/mongo/MongoCategoryRepository';
import ICategoryService from './interfaces/ICategoryService';

export class CategoryService implements ICategoryService {
    constructor(
        private categoryRepo: ICategoryRepository = new MongoCategoryRepository(),
        private bookRepository: IBookRepository = new MongoBookRepository()
    ) {}

    createCategory = async (categoryDto: ICategoryDTO) => {
        const categoryRepo = await this.categoryRepo.create(CategoryMapper.toDomain(categoryDto));
        return CategoryMapper.toDTO(categoryRepo);
    };

    categoryExists = async (categoryCode: string) => {
        const category = await this.categoryRepo.findCategoryById(categoryCode);
        return !!category;
    };

    deleteCategory = async (categoryCode: string) => {
        if (!(await this.categoryExists(categoryCode))) {
            throw new Error('Category does not exist');
        }

        const books = await this.bookRepository.getBooksByCategory(categoryCode);
        const catStock = books.reduce((acc, { stock }) => {
            return acc + stock;
        }, 0);

        if (catStock > 0) {
            throw new Error('Category has books in stock');
        }

        const deletedCount = await this.bookRepository.deleteBooksByCategory(categoryCode);

        if (deletedCount < books.length) {
            throw new Error('Could not delete all books');
        }

        return await this.categoryRepo.deleteCategory(categoryCode);
    };
}
