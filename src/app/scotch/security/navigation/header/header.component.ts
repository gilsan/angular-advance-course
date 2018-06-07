import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../about/models/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor( private auth: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$  = this.auth.isLoggedIn$;
    this.isLoggedOut$ = this.auth.isLoggedOut$;
  }

  onSideNavToggle() {
    this.sidenavToggle.emit();
  }

}
