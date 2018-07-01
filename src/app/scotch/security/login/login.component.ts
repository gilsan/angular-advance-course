import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../common/forms.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,
    private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

   }

  ngOnInit() {}
  logIn() {
    const value = this.form.value;
    if (value.email && value.password ) {
      this.auth.login( value.email,  value.password).subscribe(() => {
         this.router.navigateByUrl('/security/lessons');
      });
    }


  }
}
