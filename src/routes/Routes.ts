import { BookRoute } from './BookRoute';
import { CategoryRoute } from './CategoryRoute';

class Routes {
    private _book: BookRoute;
    private _category: CategoryRoute;

    constructor() {
        this._book = new BookRoute();
        this._category = new CategoryRoute();
    }

    get book(): BookRoute {
        return this._book;
    }
    get category(): CategoryRoute {
        return this._category;
    }
}
export default Routes;
