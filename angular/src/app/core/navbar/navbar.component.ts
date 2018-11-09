import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    return this.authService.isAuthenticated() ? this.isAuthenticated = true : this.isAuthenticated = false;
  }

  onLogOut() {
    this.authService.logout().then(res => {
      this.router.navigate(['/home']);
    });
  }
}
