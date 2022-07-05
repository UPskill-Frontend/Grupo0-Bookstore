import { Router } from 'express';
import { BookController } from '../controllers/BookController';
import { IBookController } from '../controllers/interfaces/IBookController';

export class BookRoute {
    constructor(private controller: IBookController = new BookController()) {}

    routes(app: Router) {
        app.post('/api/book', this.controller.post);

        app.get('/api/book/:id', this.controller.getById);

        app.put('/api/book/:isbn', this.controller.sell);

    }
}
