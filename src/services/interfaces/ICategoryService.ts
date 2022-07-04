import ICategoryDTO from '../../dtos/ICategoryDTO';

export default interface ICategoryService {
    createCategory: (categoryDto: ICategoryDTO) => Promise<ICategoryDTO>;
}
