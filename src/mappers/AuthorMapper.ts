import { Author } from '../domain/Author';
import IAuthorDTO from '../dtos/IAuthorDTO';
import IAuthorPersistence from '../dataSchema/IAuthorPersistence';
import { Author as AuthorDomain } from '../domain/Author';

export class AuthorMapper {
    public static toPersistence(authorDto: IAuthorDTO): IAuthorPersistence {
        return {
            name: authorDto.name,
            nif: authorDto.nif,
        };
    }

    public static toDomain(author: IAuthorPersistence): Author {
        return {
            name: author.name,
            nif: author.nif,
        };
    }

    public static toDTO(author: AuthorDomain): IAuthorDTO {
        return {
            name: author.name,
            nif: author.nif,
        };
    }
}
