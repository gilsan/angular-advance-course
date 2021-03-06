import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import { Course } from '../model/course';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

import * as moment from 'moment';


@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent implements OnInit {

  form: FormGroup;
  description: string;
  constructor(
      @Inject(MAT_DIALOG_DATA) {description, longDescription, category}: Course,
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<CourseDialogComponent>
           ) {
    this.description = description;
    this.form = fb.group({
      description: [ description, Validators.required],
      'category': [category, Validators.required],
      releasedAt: [ moment(), Validators.required],
      longDescription: [longDescription, Validators.required]
    });
  }

  ngOnInit() {
  }


  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
