import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {MessageComponent} from './message/message.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'message', component: MessageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
