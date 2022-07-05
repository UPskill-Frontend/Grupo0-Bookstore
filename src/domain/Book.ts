import IBookDTO from '../dtos/IBookDTO';

export class Book {
    public title: string;
    public isbn: string;
    public authorNIF: string;
    public stock: number;
    public publisherCode: string;
    public categoryCode: string;

    constructor(book: IBookDTO) {
        if (
            book.title &&
            book.isbn &&
            book.authorNIF &&
            book.stock !== null &&
            book.publisherCode &&
            book.categoryCode
        ) {
            this.title = book.title;
            this.isbn = book.isbn;
            this.authorNIF = book.authorNIF;
            this.stock = book.stock;
            this.publisherCode = book.publisherCode;
            this.categoryCode = book.categoryCode;
        } else {
            throw new Error("Book Fields can't be null");
        }
    }

    public static createBook(book: IBookDTO): Book {
        return new Book(book);
    }
}
