import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() closeSideNab = new EventEmitter <void>();

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private auth: AuthService, private router: Router ) { }

  ngOnInit() {
    this.isLoggedIn$  = this.auth.isLoggedIn$;
    this.isLoggedOut$ = this.auth.isLoggedOut$;
  }

  onClose() {
   this.closeSideNab.emit();
  }

  onLogout() {
    this.closeSideNab.emit();
    this.auth.logout().subscribe((data) => {
    this.router.navigateByUrl('/security/login');
   });

  }
}
