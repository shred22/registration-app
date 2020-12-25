import { Injectable } from '@angular/core';
import { HttpService, JwtResponse } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  isUserAuthenticated: boolean = false;
  constructor(private httpService: HttpService) { }

  authenticate(username, password) {

   return this.httpService.authenticateUser(username,password)

}

  public isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticatedUser") && this.isUserAuthenticated
    return !(user === null)

  }

  public logout() {
    sessionStorage.removeItem("authenticatedUser")
  }

}
