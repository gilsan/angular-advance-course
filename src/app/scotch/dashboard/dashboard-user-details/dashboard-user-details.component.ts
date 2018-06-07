import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../about/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../about/models/user.interface';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-dashboard-user-details',
  templateUrl: './dashboard-user-details.component.html',
  styleUrls: ['./dashboard-user-details.component.scss']
})
export class DashboardUserDetailsComponent implements OnInit, OnDestroy {
  user: User;
  usernameSubscription: Subscription;
  editName: string;

  constructor(private service: UserService, private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
     const username = this.route.snapshot.params['username'];
      this.usernameSubscription = this.route.params.subscribe((param) => {

      this.service.getUser(param.username).then((user: User) => {
          this.editName = user.name;
          return this.user = user;
      });
     });
  }

  ngOnDestroy() {
     this.usernameSubscription.unsubscribe();
  }

  cancel() {
    this.router.navigate(['/dashboard/users']);
  }

  save() {
      this.user.name =  this.editName;
      this.router.navigate(['/dashboard/users']);
  }

  canDeactivate() {
    console.log('i am navigate away');

    if (this.user.name !== this.editName) {
      return window.confirm('변경사항 무시 할까요?');
    }
    return true;
  }

}
