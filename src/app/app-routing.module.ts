import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { RouterGuardService } from './service/router-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [

  {path:  "", pathMatch:  "full",redirectTo:  "login"},
  {path: "home", component: HomeComponent, canActivate:[RouterGuardService]},
  {path: "login", component: LoginComponent},
  {path: "logout", component: LogoutComponent, canActivate:[RouterGuardService]},
  {path: "register", component: RegisterComponent},
  {path: "contact-list", component: ListOfUsersComponent, canActivate:[RouterGuardService]},
  {path: "welcome", component: WelcomeComponent, canActivate:[RouterGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
