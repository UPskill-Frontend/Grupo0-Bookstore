import ICategoryDTO from '../../dtos/ICategoryDTO';

export default interface ICategoryService {
    createCategory: (categoryDto: ICategoryDTO) => Promise<ICategoryDTO>;
    categoryExists: (categoryCode: string) => Promise<boolean>;
    deleteCategory: (categoryCode: string) => Promise<boolean>;
}
