import { CategoryRoute } from './CategoryRoute';
import { injectable } from 'tsyringe';
import { PublisherRoute } from './PublisherRoute';
import { AuthorRoute } from './AuthorRoute';
import { UserRoute } from './UserRoute';
import { ChartsRoute } from './ChartsRoute';
import { BookRoute } from './BookRoute';

@injectable()
class Routes {
    constructor(
        private _category: CategoryRoute,
        private _publisher: PublisherRoute,
        private _author: AuthorRoute,
        private _user: UserRoute,
        private _charts: ChartsRoute,
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

    get charts(): ChartsRoute {
        return this._charts;
    }
}
export default Routes;
