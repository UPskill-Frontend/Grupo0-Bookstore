import { Router } from 'express';
import { inject, injectable } from 'tsyringe';
import { IAuthorController } from '../controllers/interfaces/IAuthorController';

@injectable()
export class AuthorRoute {
    constructor(@inject('IAuthorController') private controller: IAuthorController) {}

    routes(app: Router) {
        app.post('/api/author', this.controller.post);
    }
}
