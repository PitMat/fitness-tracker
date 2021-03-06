import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
 @Output() sidenavToggle = new EventEmitter<void>();
 isAuth: boolean = false;
 authSubscription: Subscription | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    })
  }

  onToggleSidenav(): void {
    this.sidenavToggle.emit()
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
      this.authSubscription?.unsubscribe();
  }

}
