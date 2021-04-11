import { Component, OnInit } from '@angular/core';
import {ApihttpService} from '../apihttp.service';
import {Router} from '@angular/router';
import {UserCredentials} from '../domain/UserCredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: UserCredentials = new UserCredentials();

  usernameSizeError = false;
  wrongCredentials = false;
  passwordSizeError = false;

  constructor(private apiHttp: ApihttpService, private router: Router) { }

  ngOnInit(): void {
  }
userLogin(): void {
  this.cleanForm();
  this.apiHttp.userLogin(this.credentials).subscribe(
    () => this.router.navigate(['']),
    e => {
      if (e.status === 403) {
        this.wrongCredentials = true;
      } else {
        const errors = e.error.validationErrorList;
        for (const error of errors) {
          if (error.code === 'C001' || error.code === 'C004'){
            this.usernameSizeError = true;
          }
          if (error.code === 'C002' || error.code === 'C005'){
          this.passwordSizeError = true;
        }
      }
    }
    }
  );
}
  cleanForm(): void{
    this.usernameSizeError = false;
    this.wrongCredentials = false;
    this.passwordSizeError = false;
}
}
