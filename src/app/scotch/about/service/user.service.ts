import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

const usersPromise: Promise<User[]> = Promise.resolve([
  {
    id: 1,
    name: 'Chris',
    username: 'sevilayha',
    avatar: 'http://www.picresize.com/picresize-assets/gfx/effects/picresize_tiltshift_small.jpg'
  },
  {
    id: 2,
    name: 'Nick',
    username: 'whatnicktweets',
    avatar: 'http://www.picresize.com/picresize-assets/gfx/effects/picresize_frame_small.jpg'
  },
  {
    id: 3,
    name: 'Holly',
    username: 'hollylawly',
    avatar: 'http://www.picresize.com/picresize-assets/gfx/effects/picresize_warming_small.jpg'
  }
]);

@Injectable()
export class UserService {
  users: User[];
  username: string;
  user: User;

  getUsers() {
      return  usersPromise;
  }

  getUser(username: string) {
       return usersPromise.then(users => {
          return users.find( user => user.name === username);
       });
  }
}
