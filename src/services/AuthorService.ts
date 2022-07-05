import IAuthorDTO from '../dtos/IAuthorDTO';
import { AuthorMapper } from '../mappers/AuthorMapper';
import IAuthorRepository from '../repository/interfaces/IAuthorRepository';
import { MongoAuthorRepository } from '../repository/mongo/MongoAuthorRepository';
import IAuthorService from './interfaces/IAuthorService';

export class AuthorService implements IAuthorService {
    constructor(private authorRepo: IAuthorRepository = new MongoAuthorRepository()) {}

    createAuthor = async (authorDto: IAuthorDTO) => {
        const authorRepo = await this.authorRepo.create(AuthorMapper.toDomain(authorDto));
        return AuthorMapper.toDTO(authorRepo);
    };

    authorExists = async (nif: string) => {
        const author = await this.authorRepo.findAuthorById(nif);
        return !!author;
    };
}
