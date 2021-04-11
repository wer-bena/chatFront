import { Component, OnInit } from '@angular/core';
import {ApihttpService} from '../apihttp.service';
import {UserCredentials} from '../domain/UserCredentials';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  credentials: UserCredentials = new UserCredentials();

  usernameSizeError = false;
  usernameExistsError = false;
  passwordSizeError= false;

  constructor(private apiHttp: ApihttpService, private router: Router) { }

  ngOnInit(): void {
  }
  registerUser(): void{
    this.cleanForm();
    this.apiHttp.userRegister(this.credentials).subscribe(
      () => this.router.navigate(['']),
      e => {
       const errors = e.error.validationErrorList;
       for (const error of errors){
         if (error.code === 'C001' || error.code === 'C004'){
           this.usernameSizeError = true;
         }
         if (error.code === 'C002' || error.code === 'C005'){
           this.passwordSizeError = true;
         }
         if (error.code === 'C003'){
           this.usernameExistsError = true;
         }
       }
      }

    );
  }

  cleanForm(): void{
    this.usernameSizeError = false;
    this.usernameExistsError = false;
    this.passwordSizeError = false;
  }

}
