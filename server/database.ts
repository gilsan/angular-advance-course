import * as _ from 'lodash';
import { LESSONS, USERS} from './database-data';
import { DbUser } from './db-user';

class InMemoryDatabase {
  userCounter = 0;

  readAllLessons() {
    // console.log(_.values(LESSONS));
    return _.values(LESSONS);
  }

  createUser(email: string, passwordDigest: string) {
     this.userCounter++;

     const id = this.userCounter;
     const user: DbUser = {
        id, email, passwordDigest, roles: ['STUDENT']
     };

     USERS[id] = user;
     // console.log('database 사용자등록:', user.id, user.email, user.passwordDigest);
     return user;
  }

  findUserByEmail(email: string): DbUser  {
       const users = _.values(USERS);
      return  _.find(users, user => user.email === email);
  }

  findUserById(userid): DbUser {
    const users = _.values(USERS);
    return  _.find(users, user => user.id.toString() === userid);
  }


}

export const db = new InMemoryDatabase();
