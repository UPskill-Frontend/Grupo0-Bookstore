import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { inject, injectable } from 'tsyringe';
import { BookController } from '../controllers/BookController';
import { IBookController } from '../controllers/interfaces/IBookController';
import Role from '../enums/Roles';
import authMiddleware from '../middlewares/authMiddleware';

@injectable()
export class BookRoute {
    constructor(@inject('BookController') private controller: IBookController) {}

    routes(app: Router) {
        app.post('/api/book', authMiddleware([Role.ADMIN]), asyncHandler(this.controller.post));
        app.get('/api/book/publisher/:id', asyncHandler(this.controller.getByPublisher));
        app.get('/api/book/author/:nif', asyncHandler(this.controller.getByAuthor));
        app.post('/api/book/:isbn/order', authMiddleware([Role.ADMIN]), asyncHandler(this.controller.orderBook));
        app.get('/api/book/:isbn', asyncHandler(this.controller.getBooksByISBN));
        app.put('/api/book/:isbn', authMiddleware([Role.CLIENT]), asyncHandler(this.controller.sell));
    }
}
