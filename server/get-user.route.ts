import { Request, Response } from 'express';
import { sessionStore } from './session-store';
import { db } from './database';


export function getUser (req: Request, res: Response) {
    // const sessionId = req.cookies['SESSIONID'];
    // const user = sessionStore.findUserBySessionId(sessionId);
    console.log(req['user']);
    const user = db.findUserById(req['user']);
    console.log(' get-user.router: get-user: ', user);
    if (user) {
        res.status(200).json({email: user.email, id: user.id});
    } else {
       res.sendStatus(204);
    }
}
