import { container } from 'tsyringe';
import { AuthorController } from './controllers/AuthorController';
import { BookController } from './controllers/BookController';
import { CategoryController } from './controllers/CategoryController';
import PublisherController from './controllers/PublisherController';
import { UserController } from './controllers/UserController';
import { MongoAuthorRepository } from './repository/mongo/MongoAuthorRepository';
import { MongoBookRepository } from './repository/mongo/MongoBookRepository';
import { MongoCategoryRepository } from './repository/mongo/MongoCategoryRepository';
import MongoPublisherRepository from './repository/mongo/MongoPublisherRepository';
import { AuthorService } from './services/AuthorService';
import { BookService } from './services/BookService';
import { CategoryService } from './services/CategoryService';
import PublisherService from './services/PublisherService';
import UserService from './services/UserService';

export default function dependenciesConfig() {
    container.register('ICategoryController', { useClass: CategoryController });
    container.register('ICategoryService', { useClass: CategoryService });
    container.register('ICategoryRepository', { useClass: MongoCategoryRepository });

    container.register('IBookController', { useClass: BookController });
    container.register('IBookService', { useClass: BookService });
    container.register('IBookRepository', { useClass: MongoBookRepository });

    container.register('IPublisherController', { useClass: PublisherController });
    container.register('IPublisherService', { useClass: PublisherService });
    container.register('IPublisherRepository', { useClass: MongoPublisherRepository });

    container.register('IAuthorController', { useClass: AuthorController });
    container.register('IAuthorService', { useClass: AuthorService });
    container.register('IAuthorRepository', { useClass: MongoAuthorRepository });

    container.register('IUserController', { useClass: UserController });
    container.register('IUserService', { useClass: UserService });
}
