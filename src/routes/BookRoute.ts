import { Router } from 'express';
import { BookController } from '../controllers/BookController';
import { IBookController } from '../controllers/interfaces/IBookController';

export class BookRoute {
    constructor(private controller: IBookController = new BookController()) {}

    routes(app: Router) {
        app.post('/api/book', this.controller.post);
        app.post('/api/book/:isbn/order', this.controller.orderBook);

        app.get('/api/book/:id', this.controller.getById);

        app.put('/api/book/:isbn', this.controller.sell);

    }
}
