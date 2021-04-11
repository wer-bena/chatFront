import { Component, OnInit } from '@angular/core';
import {ApihttpService} from '../apihttp.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private apiHttp: ApihttpService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.apiHttp.logout();
    this.router.navigate(['']);
  }

}
