import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Course } from '../model/course';
import { Lesson } from '../model/lesson';
import { COURSES } from '../model/db-data';
import { LESSONS } from '../model/db-data';

@Injectable()
export class CourseService {

  course:  Course;
  lesson: Lesson;

  constructor(private http: HttpClient ) {}

  getCourseById(id: number) {
    const courses = <any>Object.values(COURSES);
    return this.course = courses.find(course =>  course.id == id);
  }

  getAllCourseLessons(courseId: number) {
    const lessons = <any>Object.values(LESSONS);
    return this.lesson = lessons.filter( lesson => lesson.courseId === courseId);
  }

  findCourseById(courseId: number): Observable<Course> {
     return this.http.get<Course>(`/api/courses/${courseId}`);
  }

  findAllCourses(): Observable<Course[]> {
      return this.http.get('/api/courses')
          .pipe(
            map(res => res['payload'])
          );
  }

  findAllCourseLessons(courseId: number): Observable<Lesson[]> {
   return this.http.get('api/lessons', {
     params: new HttpParams()
       .set('courseId', courseId.toString())
       .set('pageNumber', '0')
       .set('pageSize', '1000')
   }).pipe(
      map(res => res['payload'])
      );

    }

  findLessons (courseId: number, filter= '', sortOrder = 'asc', pageNumber = 0, pageSize = 3): Observable<Lesson[]> {
      return this.http.get('/api/lessons', {
        params: new HttpParams()
          .set('courseId', courseId.toString())
          .set('filter', filter)
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString())
      }).pipe(
        map(res => res['payload'])
      );
  }

  sendData() {
    this.http.get('http://221.141.251.58/scotch/db-table.php', {
        params: new HttpParams()
          .set('courseId', '100')
    }).pipe(
      map(res => res['payload'])
    );
  }

  }

