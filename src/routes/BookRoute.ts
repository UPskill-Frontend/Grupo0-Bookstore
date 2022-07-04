import { Router } from 'express';
import { BookController } from '../controllers/BookController';
import { IBookController } from '../controllers/interfaces/IBookController';

export class BookRoute {
    constructor(private controller: IBookController = new BookController()) {}

    routes(app: Router) {
        app.post('/api/book', this.controller.post);
        app.post('/api/book/:isbn/order', this.controller.orderBook);
    }
}
