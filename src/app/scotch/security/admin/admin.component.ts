import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
   form: FormGroup;
  constructor(
      private fb: FormBuilder ,
      private authService: AuthService,
      private router: Router ) {
         this.form = this.fb.group(
        { userEmail: ['student@gmail.com', Validators.required]}
      );
  }

  ngOnInit() {
  }

  loginAsUser() {
    const val = this.form.value;

    if (val.userEmail) {
       this.authService.loginAsUser(val.userEmail)
         .subscribe( user => {
             console.log('Logged in as user with email ' + val.email);
             this.router.navigateByUrl('/security/lessons');
         });
    }
  }

}
