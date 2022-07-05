import 'reflect-metadata';
import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Routes from './routes/Routes';
import { container, injectable } from 'tsyringe';
import { CategoryController } from './controllers/CategoryController';
import { CategoryService } from './services/CategoryService';
import { MongoCategoryRepository } from './repository/mongo/MongoCategoryRepository';
import { BookService } from './services/BookService';
import { BookController } from './controllers/BookController';
import PublisherController from './controllers/PublisherController';
import PublisherService from './services/PublisherService';

@injectable()
export class App {
    public app: Application = express();
    // public routes: Routes = new Routes();
    public mongoUrl: string = `${process.env.MONGO_URI || ''}${process.env.MONGO_DATABASE || ''}${
        process.env.MONGO_OPTIONS || ''
    }`;

    constructor(public routes: Routes) {
        this.config();
        this.mongoSetup();
        this.routes.publisher.routes(this.app);
        this.routes.book.routes(this.app);
        this.routes.category.routes(this.app);
    }

    private config(): void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl).then(
            () => console.log('Connected to database'),
            () => console.error('Connection failed')
        );
    }
}

// Move into configs

container.register('ICategoryController', { useClass: CategoryController });
container.register('ICategoryService', { useClass: CategoryService });
container.register('ICategoryRepository', { useClass: MongoCategoryRepository });
container.register('IBookController', { useClass: BookController });
container.register('IBookService', { useClass: BookService });
container.register('IPublisherController', { useClass: PublisherController });
container.register('IPublisherService', { useClass: PublisherService });

const app = container.resolve(App);

export default app.app;
