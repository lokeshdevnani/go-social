import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Config } from './../shared/config';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Object;

  constructor(
    private router: Router,
    private userService: UserService,
    private auth: AuthService
  ) {
    this.user = {
      name: '',
      password: '',
      email: ''
    };
  }

  ngOnInit() {
  }

  login(f: NgForm) {
    let formValues = f.value;
    this.userService.login(formValues)
        .subscribe( (user: any) => {
          if(user.success) {
            this.auth.setToken(user.token);
            this.router.navigate(['/campaigns']); // navigate to the main route
          }
        });
  }

}
