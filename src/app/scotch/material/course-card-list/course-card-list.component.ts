import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../model/course';
import { MatDialog, MatDialogConfig,   } from '@angular/material';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.scss']
})
export class CourseCardListComponent implements OnInit {

  @Input() courses: Course[];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  editCourse({id, description, longDescription, category}: Course) {
  console.log(id);
   const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = true;
   dialogConfig.autoFocus = true;
   dialogConfig.data = {description, longDescription, category};
  const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

   dialogRef.afterClosed().subscribe( ref => {
      console.log(ref);
   });
  }

}
