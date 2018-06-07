import { Component, OnInit } from '@angular/core';
import { UserService } from '../../about/service/user.service';
import { User } from '../../about/models/user.interface';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.scss']
})
export class DashboardUsersComponent implements OnInit {
  users: User[];
  constructor( private service: UserService) { }


  ngOnInit() {
    this.service.getUsers().then((users) => {
      this.users = users;
   });
  }

}
