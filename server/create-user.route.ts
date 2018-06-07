import { Request, Response } from 'express';
import { db } from './database';
import { USERS } from './database-data';
import { randomBytes } from './security.utils';
import { validatePassword } from './password-validator';
import { sessionStore } from './session-store';


export function createUser (req: Request, res: Response) {
   const credentials = req.body;
   const errors = validatePassword(credentials.password);
   console.log(errors);
   if (errors.length > 0) {
     res.status(400).json({errors});
   } else {
    createUserAndSession(res, credentials);
   }
   /*
   const user =   db.createUser(credentials.email, credentials.password);
   console.log(USERS);

   res.status(200).json({id: user.id, email: user.email});
   */
}

async function createUserAndSession(res: Response, credentials) {

  const user = db.createUser(credentials.email, credentials.password);

  // TODO replace with JWT
  const sessionId = await randomBytes(32).then(
    bytes => bytes.toString('hex'));
    sessionStore.createSession(sessionId, user);
    console.log('sessionId: ', sessionId);
    res.cookie('SESSIONID', sessionId, {httpOnly: true, secure: true});
    res.status(200).json({id: user.id, email: user.email});
}
