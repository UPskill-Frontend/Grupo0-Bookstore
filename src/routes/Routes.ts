import { PublisherRoute } from './PublisherRoute';
import { BookRoute } from './BookRoute';
import { CategoryRoute } from './CategoryRoute';

class Routes {
    
    private _category: CategoryRoute;
    private _publisher: PublisherRoute;
    private _book: BookRoute;

    constructor() {
        this._publisher = new PublisherRoute();
        this._category = new CategoryRoute();
        this._book = new BookRoute();
    }

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
