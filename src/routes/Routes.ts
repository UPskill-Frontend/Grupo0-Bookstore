import { PublisherRoute } from './PublisherRoute';
import { BookRoute } from './BookRoute';
import { CategoryRoute } from './CategoryRoute';
import { injectable } from 'tsyringe';

@injectable()
class Routes {
    constructor(private _category: CategoryRoute, private _publisher: PublisherRoute, private _book: BookRoute) {}

    get publisher(): PublisherRoute {
        return this._publisher;
    }

    get category(): CategoryRoute {
        return this._category;
    }

    get book(): BookRoute {
        return this._book;
    }
}
export default Routes;
