import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { debounceTime, distinctUntilChanged, startWith, tap, timeout} from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material';
import { Lesson } from '../model/lesson';
// import { merge } from 'rxjs/observable/merge';
// import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, AfterViewInit {

  course: Course;
  lesson: Lesson[];

  dataSource = new MatTableDataSource([]);
  displayedColumns = ['seqNo', 'description', 'duration'];
  constructor(private route: ActivatedRoute,
     private courseService: CourseService) { }

  ngOnInit() {
    this.course = this.route.snapshot.data['course'];
    this.lesson = this.courseService.getAllCourseLessons(this.course.id);
    this.dataSource.data = this.lesson;
    // this.dataSource.data = this.lesson;
  }

  ngAfterViewInit() {}


  searchLessons(search = '') {
   this.dataSource.filter = search.toLowerCase().trim();

  }
}

