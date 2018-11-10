import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { HelperService } from '../../services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isSubmitted = false;

  constructor(
    private router: Router,
    private location: Location,
    private authService: AuthService,
    private helperService: HelperService
  ) { }

  ngOnInit() {

  }

  onSubmit() {
    this.isSubmitted = true;

    this.authService.login(this.username, this.password)
      .then(user => {
        console.log(user);
        this.helperService.setTokens(user.data);
        this.router.navigate(['/home']);
      });
  }

  goBack() {
    this.location.back();
  }
}
