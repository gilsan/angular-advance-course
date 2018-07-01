import { Request, Response, NextFunction } from 'express';
import { decodeJwt } from './security.utils';
export function retriveUserIdFromRequest(req: Request, res: Response, next: NextFunction) {
    const jwt = req.cookies['SESSIONID'];

    if (jwt) {
       handleSessionCookie(jwt, req)
        .then(() => next())
        .catch(err => {
            console.log(err);
            next();
            });
    } else {
      next();
    }

}

 async function handleSessionCookie(jwt: string, req: Request) {
   try {
    const payload = await decodeJwt(jwt);
    req['userId'] = payload.sub;
   } catch ( err ) {
         console.log('Get-User Util: Error: Could not extract user from request', err);
     }

 }
