import ICategoryDTO from '../dtos/ICategoryDTO';

export class Category {
    public categoryCode: string;
    public category: string;

    constructor(catDto: ICategoryDTO) {
        this.categoryCode = catDto.categoryCode;
        this.category = catDto.category;
    }

    static create = (catDto: ICategoryDTO) => {
        return new Category(catDto);
    };
}
