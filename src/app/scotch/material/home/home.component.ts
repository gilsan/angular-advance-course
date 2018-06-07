import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CourseService } from '../services/course.service';

import { Course } from '../model/course';
import { COURSES } from '../model/db-data';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 // beginnerCourses$: Observable<Course[]>;
 // advancedCourses$: Observable<Course[]>;
      beginnerCourses: Course[];
      advancedCourses: Course[];
  constructor( private courseService: CourseService) { }

  ngOnInit() {
    const courses = <any>Object.values(COURSES);
    this.beginnerCourses = courses.filter(course => course.category === 'BEGINNER');

    this.advancedCourses = courses.filter(course => course.category === 'ADVANCED');
    /*
    const courses$ =  this.courseService.findAllCourses();

    this.beginnerCourses$  = courses$.pipe(
     map(courses => courses.filter( course => course.category === 'BEGINNER'))
    );
     this.advancedCourses$ = courses$.pipe(
    map(courses => courses.filter( course => course.category === 'ADVANCED'))
     );
   */
    }

}
