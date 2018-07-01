import { Request, Response, NextFunction } from 'express';
import * as _ from 'lodash';
import { db } from './database';

export function checkIfAuthorized(
  allowedRoles: string[],
  req: Request,
  res: Response,
  next: NextFunction) {
    console.log(req);
    const userId = req['userId'];
    const userEmail = req.body.email;

     const userInfo = db.findUserById(userId);
     console.log('1 [ authorization.middleware.ts ]', userInfo);
     const roles = _.intersection(userInfo.roles, allowedRoles);
     console.log('2 [ authorization.middleware.ts ]', allowedRoles);
     console.log('3 [ authorization.middleware.ts ]', roles);
     if (roles.length > 0 ) {
        next();
     } else {
       res.sendStatus(403);
     }

}
