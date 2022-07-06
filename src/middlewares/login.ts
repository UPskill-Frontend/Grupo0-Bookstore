const jwt = require('jsonwebtoken');
import { NextFunction, Request, Response } from 'express';

export function login(req: Request, res: Response, next: NextFunction) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email && !password) return res.sendStatus(400);
    const acessToken = jwt.sign({ email }, process.env.ACESS_TOKEN_SECRET);
    res.json({ token: acessToken });
}

export function authenticateToken(req: Request, res: Response, next: Function) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACESS_TOKEN_SECRET, (err: any, email: string) => {
        if (err) return res.sendStatus(403);
        req.headers.email = email;
        next();
    });
}
