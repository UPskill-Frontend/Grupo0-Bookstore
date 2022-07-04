import ICategoryDTO from '../dtos/ICategoryDTO';
import { CategoryMapper } from '../mappers/CategoryMapper';
import ICategoryRepository from '../repository/interfaces/ICategoryRepository';
import { MongoCategoryRepository } from '../repository/mongo/MongoCategoryRepository';
import ICategoryService from './interfaces/ICategoryService';

export class CategoryService implements ICategoryService {
    constructor(private categoryRepo: ICategoryRepository = new MongoCategoryRepository()) {}

    createCategory = async (categoryDto: ICategoryDTO) => {
        const categoryRepo = await this.categoryRepo.create(CategoryMapper.toDomain(categoryDto));
        return CategoryMapper.toDTO(categoryRepo);
    };
}
