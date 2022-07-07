import { inject, injectable } from 'tsyringe';
import ICategoryDTO from '../dtos/ICategoryDTO';
import { CategoryMapper } from '../mappers/CategoryMapper';
import IBookRepository from '../repository/interfaces/IBookRepository';
import ICategoryRepository from '../repository/interfaces/ICategoryRepository';
import ICategoryService from './interfaces/ICategoryService';

@injectable()
export class CategoryService implements ICategoryService {
    constructor(
        @inject('CategoryRepository') private categoryRepo: ICategoryRepository,
        @inject('BookRepository') private bookRepository: IBookRepository
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
