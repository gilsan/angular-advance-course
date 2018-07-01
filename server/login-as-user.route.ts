import { db } from './database';
import { createSessionToken } from './security.utils';

export function loginAsUser(req, res) {
   const impersonatedUserEmail = req.body.email;
   const impresonatedUser = db.findUserByEmail(impersonatedUserEmail);
   createSessionToken(impresonatedUser)
   .then( sessionToken => {
    res.cookie('SESSIONID', sessionToken, { httpOnly: true, secure: true});
    res.status(200).json({
      id: impresonatedUser.id,
      email: impresonatedUser.email,
      roles: impresonatedUser.roles
    });
   }

   )
   .catch( err => {
     console.log(' Error trying to login as user', err);
     res.sendStatus(500);
   });
}
