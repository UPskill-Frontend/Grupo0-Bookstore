import IBookDTO from '../../dtos/IBookDTO';

export default interface IBookService {
    createBook: (bookDto: IBookDTO) => Promise<IBookDTO>;
    getBookByPublisher: (id: string) => Promise<IBookDTO[]>;
}
