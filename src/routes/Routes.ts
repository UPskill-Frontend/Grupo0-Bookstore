import { CategoryRoute } from './CategoryRoute';

class Routes {
    private _category: CategoryRoute;
    constructor() {
        this._category = new CategoryRoute();
    }
    get category(): CategoryRoute {
        return this._category;
    }
}
export default Routes;
