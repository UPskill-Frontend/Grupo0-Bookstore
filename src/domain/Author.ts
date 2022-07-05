import IAuthorDTO from '../dtos/IAuthorDTO';

export class Author {
    public name: string;
    public nif: string;

    constructor(author: IAuthorDTO) {
        if (author.name && author.nif) {
            this.name = author.name;
            this.nif = author.nif;
        } else {
            throw new Error("Author Fields can't be null");
        }
    }

    public static createAuthor(author: IAuthorDTO): Author {
        return new Author(author);
    }
}
