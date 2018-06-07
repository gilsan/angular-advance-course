import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../model/course';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  courses: Course[];
  constructor(private courseService: CourseService) {

     this.courseService.sendData();
    }

  ngOnInit() {

  }

}
