import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { User } from './models/user.interface';
import { UserService } from './service/user.service';


@Injectable()
export class AboutUserResolve implements Resolve<User> {

  constructor(private service: UserService, private router: Router ) {}
  resolve(route: ActivatedRouteSnapshot ): any {
     const username = route.params['username'];
   return  this.service.getUser(username).then((user: User) => {
        if (user) {
            return user;
        } else {
          this.router.navigate(['/about']);
          return false;
        }
    });
  }
}
