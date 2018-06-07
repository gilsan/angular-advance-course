import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,
 Resolve, RouterStateSnapshot } from '@angular/router';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { CourseService } from './course.service';

@Injectable()
export class CourseResolver implements Resolve<Course> {
  constructor(private courseService: CourseService) {}

  resolve(route: ActivatedRouteSnapshot ) {
    return  this.courseService.getCourseById(route.params['id']);
    // return this.courseService.findCourseById(route.params['id']);
   }
}
