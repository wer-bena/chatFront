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

  constructor(private apiHttp: ApihttpService, private router: Router) { }

  ngOnInit(): void {
  }
userLogin(): void {
    this.apiHttp.userLogin(this.credentials).subscribe(
      () => this.router.navigate(['']),
    );
}
}
