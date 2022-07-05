import { Router } from 'express';
import { inject, injectable } from 'tsyringe';
import { BookController } from '../controllers/BookController';
import { IBookController } from '../controllers/interfaces/IBookController';

@injectable()
export class BookRoute {
    constructor(@inject('IBookController') private controller: IBookController) {}

    routes(app: Router) {
        app.post('/api/book', this.controller.post);
        app.post('/api/book/:isbn/order', this.controller.orderBook);
    }
}
