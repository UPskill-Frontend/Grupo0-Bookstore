import IBookDTO from '../dtos/IBookDTO';

export class Book {
    public title: string;
    public isbn: string;
    public author: string;
    public stock: number;
    public publisherCode: string;
    public categoryCode: string;

    constructor(book: IBookDTO) {
        if (book.title && book.isbn && book.author && book.stock && book.publisherCode && book.categoryCode) {
            this.title = book.title;
            this.isbn = book.isbn;
            this.author = book.author;
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
