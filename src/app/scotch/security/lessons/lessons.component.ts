import { Component, OnInit } from '@angular/core';


import { Lesson } from './../model/lesson';
import { LessonsService } from '../services/lessons.service';
import { AuthService } from '../services/auth.service';
import { of as observableOf, Observable } from 'rxjs';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  constructor(private lessonsService: LessonsService,
   private authService: AuthService) { }

   lessons$: Observable<Lesson[]>;
   isLoggedIn$: Observable<boolean>;

  ngOnInit() {
    this.lessons$ =  this.lessonsService.loadAllLessons();
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

}
