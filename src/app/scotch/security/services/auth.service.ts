import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { User } from '../model/user';
import { BehaviorSubject } from 'rxjs';
import { map, shareReplay, tap, filter } from 'rxjs/operators';

export const ANONYMOUS_USER: User = {
   id: undefined,
   email: ''
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subject = new BehaviorSubject<User>(undefined);
  user$: Observable<User> = this.subject.asObservable().pipe(filter(user => !!user));

  isLoggedIn$:  Observable<boolean> = this.user$.pipe(map((user) => !!user.id));
  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));

  constructor( private http: HttpClient) {
    http.get<User>('/api/user')
      .subscribe(user => this.subject.next(user ? user : ANONYMOUS_USER));
  }

  signUp(email: string, password: string) {
    return this.http.post<User>('/api/signup', { email: email, password: password}).pipe(
      shareReplay(),
      tap(user => this.subject.next(user))
    );

  }

}
