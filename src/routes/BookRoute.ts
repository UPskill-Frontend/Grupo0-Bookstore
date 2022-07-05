import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { inject, injectable } from 'tsyringe';
import { IBookController } from '../controllers/interfaces/IBookController';

@injectable()
export class BookRoute {
    constructor(@inject('IBookController') private controller: IBookController) {}

    routes(app: Router) {
        app.post('/api/book', asyncHandler(this.controller.post));
        app.get('/api/book/publisher/:id', asyncHandler(this.controller.getByPublisher));
        app.get('/api/book/author/:nif', asyncHandler(this.controller.getByAuthor));
        app.post('/api/book/:isbn/order', asyncHandler(this.controller.orderBook));
        app.get('/api/book/:isbn', asyncHandler(this.controller.getBooksByISBN));
        app.put('/api/book/:isbn', asyncHandler(this.controller.sell));
    }
}
