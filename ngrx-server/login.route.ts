import { Request, Response } from 'express';
import { authenticate } from './db-data';

export function login(req: Request, res: Response ) {
   console.log('로그인 요청.....');
   const { email, password } = req.body;
   const user = authenticate(email, password);

   if (user) {
     res.status(200).json({id: user.id, email: user.emil});
   } else {
     res.sendStatus(400);
   }

}
