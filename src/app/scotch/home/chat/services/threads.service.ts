import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllUserData } from '../share/to/all-user-data';

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  constructor(private http: HttpClient) { }

  loadUserThreads(): Observable<AllUserData> {
   // return this.http.get('api/threads');
   return;
  }

}
