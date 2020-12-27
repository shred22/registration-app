import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from '../register/register.component';
import { map } from 'rxjs/operators';
import { Employee } from '../list-of-users/list-of-users.component';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

export class RegistrationResponse   {
  public constructor(public registrationId:number, public status:string) {}
}

export class JwtRequest {
  public constructor(public username:string, public password:string) {}
}

export class JwtResponse {
  public constructor(public token:string) {}
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {



private constructor(public httpClient: HttpClient) {}
isUserAuthenticated: boolean = false;
  registerCandidate(candidate: Candidate) {
    console.log("Method Invoked .!!!" + candidate.address.addressLine1+ " "+ candidate.physicalDisability
    + " : "+ candidate.bloodGroup)
    return this.httpClient.post<RegistrationResponse>("http://localhost:8080/register", candidate);
  }

   authenticateUser(username:string, password: string) {
    console.log("Authenticating Trigerred..!!")
    return this.httpClient.post<JwtResponse>(`http://localhost:8080/authenticate`, new JwtRequest(username, password))
    .pipe(map(response =>
      {
        console.log("Auth Response : "+JSON.stringify(response))
        sessionStorage.setItem(TOKEN, `Bearer ${response.token}`);
        sessionStorage.setItem(AUTHENTICATED_USER, username);
        return response;
      }));
  }

  public logout() {
    console.log("Logging Out")
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

  public getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  public getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  public isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticatedUser")
    return !(user === null)

  }

  getAllEmployees() {
    return this.httpClient.get<Employee[]>(`http://localhost:8080/employees`);
  }

  saveEmployee(emp: Employee) {
    console.log(`posting emp ${JSON.stringify(emp)}`)
    return this.httpClient.post(`http://localhost:8080/employee`, emp);
  }

  deleteEmployee(employeedId: number) {
    return this.httpClient.delete(`http://localhost:8080/employee/${employeedId}`)
  }
}
