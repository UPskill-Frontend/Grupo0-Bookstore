import { AuthorController } from './controllers/AuthorController';
import { BookController } from './controllers/BookController';
import { CategoryController } from './controllers/CategoryController';
import PublisherController from './controllers/PublisherController';
import { UserController } from './controllers/UserController';
import { MongoAuthorRepository } from './repository/mongo/MongoAuthorRepository';
import { MongoBookRepository } from './repository/mongo/MongoBookRepository';
import { MongoCategoryRepository } from './repository/mongo/MongoCategoryRepository';
import MongoPublisherRepository from './repository/mongo/MongoPublisherRepository';
import MongoUserRepository from './repository/mongo/MongoUserRepository';
import { AuthorRoute } from './routes/AuthorRoute';
import { BookRoute } from './routes/BookRoute';
import { AuthorService } from './services/AuthorService';
import { BookService } from './services/BookService';
import { CategoryService } from './services/CategoryService';
import PublisherService from './services/PublisherService';
import UserService from './services/UserService';

export const dependencies = [
    // author
    { token: 'AuthorRepository', useToken: MongoAuthorRepository },
    { token: 'AuthorService', useToken: AuthorService },
    { token: 'AuthorController', useToken: AuthorController },
    // book
    { token: 'BookRepository', useToken: MongoBookRepository },
    { token: 'BookService', useToken: BookService },
    { token: 'BookController', useToken: BookController },
    // category
    { token: 'CategoryRepository', useToken: MongoCategoryRepository },
    { token: 'CategoryService', useToken: CategoryService },
    { token: 'CategoryController', useToken: CategoryController },
    // publisher
    { token: 'PublisherRepository', useToken: MongoPublisherRepository },
    { token: 'PublisherService', useToken: PublisherService },
    { token: 'PublisherController', useToken: PublisherController },
    // user
    { token: 'UserRepository', useToken: MongoUserRepository },
    { token: 'UserService', useToken: UserService },
    { token: 'UserController', useToken: UserController },
];
