import { PublisherRoute } from './PublisherRoute';

class Routes {
    private _publisher: PublisherRoute;
    constructor() {
        this._publisher = new PublisherRoute();
    }

    get publisher(): PublisherRoute {
        return this._publisher;
    }
}
export default Routes;
