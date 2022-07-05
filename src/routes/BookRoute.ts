import { Router } from 'express';
import { inject, injectable } from 'tsyringe';
import { IBookController } from '../controllers/interfaces/IBookController';

@injectable()
export class BookRoute {
    constructor(@inject('IBookController') private controller: IBookController) {}

    routes(app: Router) {
        app.post('/api/book', this.controller.post);
        app.get('/api/book/publisher/:id', this.controller.getByPublisher);
        app.post('/api/book/:isbn/order', this.controller.orderBook);
        app.get('/api/book/:isbn', this.controller.getBooksByISBN);
        app.put('/api/book/:isbn', this.controller.sell);
    }
}
