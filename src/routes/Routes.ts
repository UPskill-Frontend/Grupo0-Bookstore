import { CategoryRoute } from './CategoryRoute';
import { container, injectable } from 'tsyringe';
import { PublisherRoute } from './PublisherRoute';
import { AuthorRoute } from './AuthorRoute';
import { UserRoute } from './UserRoute';
import { BookRoute } from './BookRoute';

@injectable()
class Routes {
    // private _category: CategoryRoute = container.resolve(CategoryRoute);
    // private _publisher: PublisherRoute = container.resolve(PublisherRoute);
    // private _author: AuthorRoute = container.resolve(AuthorRoute);
    // private _user: UserRoute = container.resolve(UserRoute);
    // private _book: BookRoute = container.resolve(BookRoute);
    constructor(
        private _category: CategoryRoute,
        private _publisher: PublisherRoute,
        private _author: AuthorRoute,
        private _user: UserRoute,
        private _book: BookRoute
    ) {}

    get category(): CategoryRoute {
        return this._category;
    }

    get publisher(): PublisherRoute {
        return this._publisher;
    }

    get book(): BookRoute {
        return this._book;
    }

    get author(): AuthorRoute {
        return this._author;
    }

    get user(): UserRoute {
        return this._user;
    }
}
export default Routes;
