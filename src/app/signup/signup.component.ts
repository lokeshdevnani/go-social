import { UserService } from './../user.service';
import { Config } from './../shared/config';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: Object;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.user = {
      name: '',
      password: '',
      email: ''
    };
  }
  ngOnInit() {
  }

  signup(f: NgForm) {
    let formValues = f.value;
    this.userService.signup(formValues)
        .subscribe((user: any) => {
          if (user.success) {
            this.router.navigate(['/campaigns']); // navigate to the main route
          }
        });
  }

}
