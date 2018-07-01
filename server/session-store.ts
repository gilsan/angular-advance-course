import { Session } from './session';
import { User } from 'src/app/scotch/security/model/user';

 class SessionStore {
   private sessions: { [key: number]: Session} = {} ;

   createSession(sessionId: string, user: User) {
     this.sessions[sessionId] = new Session(sessionId, user);
   }

   findUserBySessionId(sessionId: string): User | undefined {
       const session = this.sessions[sessionId];
     //  const isSessionValid = session && session.isValid() ;

       return this.isSessionValid(sessionId) ? session.user : undefined;
   }

   isSessionValid(sessionId: string): boolean {
      const session = this.sessions[sessionId];
      return  session && session.isValid();
   }

   destroySession(sessionId: string) {
     delete this.sessions[sessionId];

   }
 }

 export const sessionStore = new SessionStore();
