import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../common/forms.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  constructor( private fb: FormBuilder, private auth: AuthService) {
     this.form = this.fb.group({
       email: ['', Validators.required],
       password: ['', Validators.required],
       confirm: ['' , Validators.required]
     });
   }

  ngOnInit() {
  }

  signUp() {
    const val = this.form.value;

    if ( val.email && val.password && val.password === val.confirm) {
      this.auth.signUp(val.email, val.password)
       .subscribe(
         () => console.log('사용자 생성 되었습니다.'),
         console.error
       );
    } else {
      alert('암호가 맞는지 확인 해 주십시요');
    }

  }

}
