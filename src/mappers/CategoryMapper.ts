import { Category } from '../domain/Category';
import ICategoryDTO from '../dtos/ICategoryDTO';
import ICategoryPersistence from '../dataSchema/ICategoryPersistence';
import { Category as CategoryDomain } from '../domain/Category';

export class CategoryMapper {
    public static toPersistence(categoryDto: ICategoryDTO): ICategoryPersistence {
        return {
            categoryCode: categoryDto.categoryCode,
            category: categoryDto.category,
        };
    }

    public static toDomain(category: ICategoryPersistence): Category {
        return {
            categoryCode: category.categoryCode,
            category: category.category,
        };
    }

    public static toDTO(category: CategoryDomain): ICategoryDTO {
        return {
            categoryCode: category.categoryCode,
            category: category.category,
        };
    }
}
