import { inject, injectable } from 'tsyringe';
import IAuthorDTO from '../dtos/IAuthorDTO';
import { AuthorMapper } from '../mappers/AuthorMapper';
import IAuthorRepository from '../repository/interfaces/IAuthorRepository';
import IAuthorService from './interfaces/IAuthorService';

@injectable()
export class AuthorService implements IAuthorService {
    constructor(@inject('AuthorRepository') private authorRepo: IAuthorRepository) {}

    createAuthor = async (authorDto: IAuthorDTO) => {
        const authorRepo = await this.authorRepo.create(AuthorMapper.toDomain(authorDto));
        return AuthorMapper.toDTO(authorRepo);
    };

    authorExists = async (nif: string) => {
        const author = await this.authorRepo.findAuthorById(nif);
        return !!author;
    };
}
