import { Category } from '../../domain/Category';
import { CategoryMapper } from '../../mappers/CategoryMapper';
import { CategorySchema } from '../../persistence/schemas/categorySchema';
import ICategoryRepository from '../interfaces/ICategoryRepository';

export class MongoCategoryRepository implements ICategoryRepository {
    create = async (category: Category) => {
        const newCategory = await CategorySchema.create(CategoryMapper.toPersistence(category));
        return CategoryMapper.toDomain(newCategory);
    };
}
