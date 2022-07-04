import IBookDTO from '../../dtos/IBookDTO';

export default interface IBookService {
    createBook: (bookDto: IBookDTO) => Promise<IBookDTO>;
    sellBook: (isbn: string) => Promise<IBookDTO | null>;
}
