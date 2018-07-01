import { Request, Response, NextFunction } from 'express';
export function checkIfAuthenticated(req: Request, res: Response, next: NextFunction) {
   console.log(' [ auth middlewrare ]  ', req['userId']);

   if (req['userId']) {
      next();
   } else {
     res.sendStatus(403);
   }
}
