import { Component, OnInit } from '@angular/core';
import { User } from './models/user.interface';
// import { UserService } from './service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users: User[];
  constructor(  private route: ActivatedRoute) { }

  ngOnInit() {
   //  this.service.getUsers().then((data) => {
   //   return this.users = data;
   // });

    this.route.data.forEach((data: { users: User[]}) => {
      this.users = data.users;

    });

  }

}
