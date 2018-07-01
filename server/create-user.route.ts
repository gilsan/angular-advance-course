import { Request, Response } from 'express';
import { db } from './database';
import { USERS } from './database-data';
import { randomBytes, createSessionToken, createCsrfToken } from './security.utils';
import { validatePassword } from './password-validator';
import { sessionStore } from './session-store';


export function createUser (req: Request, res: Response) {
   const credentials = req.body;
   const errors = validatePassword(credentials.password);
   // console.log('create-user.router.ts: ', errors);
   if (errors.length > 0) {
     res.status(400).json({errors});
   } else {
    createUserAndSession(res, credentials)
       .catch(( err) => {
        console.log('Error creating new user', err);
         res.sendStatus(500);
         });
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
    // const sessionId = await randomBytes(32).then(
    // bytes => bytes.toString('hex'));
    // sessionStore.createSession(sessionId, user);
  // JWT
    const sessionToken =  await createSessionToken(user);
    console.log('create-user.route 토큰:', sessionToken);
    const csrfToken = await createCsrfToken();
    res.cookie('SESSIONID', sessionToken, {httpOnly: true, secure: true});
    res.cookie('XSRF-TOKEN', csrfToken);
     console.log('create-user.route 토큰:' + sessionToken + ' ' + csrfToken);
    res.status(200).json({id: user.id, email: user.email, roles: user.roles});
}
