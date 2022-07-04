import IBookDTO from '../../dtos/IBookDTO';

export default interface IBookService {
    createBook: (bookDto: IBookDTO) => Promise<IBookDTO>;
    getBooksByISBN: (isbn: string) => Promise<IBookDTO>;
}
