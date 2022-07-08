import { PublisherRoute } from './PublisherRoute';
import { BookRoute } from './BookRoute';
import { CategoryRoute } from './CategoryRoute';
import { injectable } from 'tsyringe';
import { AuthorRoute } from './AuthorRoute';
import { UserRoute } from './UserRoute';
import { ChartsRoute } from './ChartsRoute';

@injectable()
class Routes {
    constructor(
        private _category: CategoryRoute,
        private _publisher: PublisherRoute,
        private _book: BookRoute,
        private _author: AuthorRoute,
        private _user: UserRoute,
        private _charts: ChartsRoute
    ) {}

    get publisher(): PublisherRoute {
        return this._publisher;
    }

    get category(): CategoryRoute {
        return this._category;
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

    get charts(): ChartsRoute {
        return this._charts;
    }
}
export default Routes;
