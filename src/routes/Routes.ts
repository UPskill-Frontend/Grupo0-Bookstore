import { BookRoute } from './BookRoute';

class Routes {
    private _book: BookRoute;

    constructor() {
        this._book = new BookRoute();
    }

    get book(): BookRoute {
        return this._book;
    }
}
export default Routes;
