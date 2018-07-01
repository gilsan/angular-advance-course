import { Request, Response } from 'express';
import { db } from './database';
import { LEFT_ARROW } from 'src/app/components/au-mask/mask.utils';
import { randomBytes, createSessionToken, createCsrfToken } from './security.utils';
import { sessionStore } from './session-store';
import { DbUser } from './db-user';


export function login(req: Request, res: Response) {
   const credentials = req.body;
   const user = db.findUserByEmail(credentials.email);
   if (!user) {
        res.sendStatus(403);
   } else {
         loginAndBuildResponse(credentials, user, res);
   }
}

 async function loginAndBuildResponse(credentials: any, user: DbUser, res:  Response) {
     try  {
        const sessionId = await attemptLogin(credentials, user);
        const csrfToken = await createCsrfToken();
        console.log(' Login success');
        res.cookie('SESSIONID', sessionId, { httpOnly: true, secure: true});
        res.cookie('XSRF-TOKEN', csrfToken);
        res.status(200).json({id: user.id, email: user.email});
     } catch (err) {
          console.log(' Login fail');
          res.sendStatus(403);
     }
 }

 async function attemptLogin(credentials, user) {

    if (credentials.password === user.passwordDigest) {
        return createSessionToken(user.id.toString());
        // const sessionId = await randomBytes(32).then(bytes => bytes.toString('hex'));
        // console.log('sessionId: ', sessionId);
        // sessionStore.createSession(sessionId, user);
        // return sessionId;
      } else {
        throw new Error('Password not match');
      }



 }
