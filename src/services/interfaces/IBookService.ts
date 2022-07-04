import IBookDTO from '../../dtos/IBookDTO';

export default interface IBookService {
    createBook: (bookDto: IBookDTO) => Promise<IBookDTO>;
    orderBook: (book: IBookDTO) => Promise<IBookDTO>;
}
