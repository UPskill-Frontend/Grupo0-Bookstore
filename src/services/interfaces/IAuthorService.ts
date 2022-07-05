import IAuthorDTO from '../../dtos/IAuthorDTO';

export default interface IAuthorService {
    createAuthor: (authorDto: IAuthorDTO) => Promise<IAuthorDTO>;
}
