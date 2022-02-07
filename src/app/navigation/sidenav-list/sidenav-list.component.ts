import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
 @Output() closeSidenav = new EventEmitter<void>();
 authSubscription: Subscription = new Subscription();
 isAuth: boolean = false;

  constructor( private authService: AuthService ) { }

  ngOnInit(): void {
    this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus
  })
  }

  onClose(): void {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.authService.logout();
    this.onClose();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
}

}
