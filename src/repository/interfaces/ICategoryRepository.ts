import { Category } from '../../domain/Category';

export default interface ICategoryRepository {
    create: (categoryDomain: Category) => Promise<Category>;
}
