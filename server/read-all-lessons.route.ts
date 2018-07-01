import { db} from './database';
import { sessionStore } from './session-store';

export function readAllLessons(req, res) {
  return res.status(200).json({lessons: db.readAllLessons()});

 // 세션을 사용할 경우
 // const sessionId = req.cookies['SESSIONID'];
 // const isSessionValid = sessionStore.isSessionValid(sessionId);
 // if (!isSessionValid) {
 //   res.sendStatus(403);
 // } else {
 //   return res.status(200).json({lessons: db.readAllLessons()});
 // }



}
