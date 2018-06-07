import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
// import { UserService } from '../service/user.service';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.css']
})
export class AboutUserComponent implements OnInit {
  user: User;
  username: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  //  private service: UserService
  ) { }

  ngOnInit() {
   // this.username =  this.route.snapshot.params['username'];
   //   this.service.getUser(this.username).then((data: User) => {
   //      return this.user = data;
   //   });
   this.route.data.forEach((data: { user: User}) => {
    console.log(data.user);
        this.user = data.user;
   });
  }
  goback() {
    this.router.navigate(['/about']);
  }

}
