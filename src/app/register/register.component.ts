import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HttpService, JwtRequest } from '../service/http.service';

export class Contact {
  constructor(public id: number, public name:String, public description:String,public email:String) {

  }
}

export class Candidate {
  constructor(public username:string, public password:string,  public name:String, public age:number,public bloodGroup:String,
    public physicalDisability: boolean, public address:Address) {

  }
}

export class Address {
  constructor(public addressLine1:String, public addressLine2:String,public pincode:number,
    public landmark: string ) {

  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  contact = new Contact(1, "Shreyas", "Engineer", "shd22@gmail.com")

  address= new Address('', '', 0, '');
  candidate = new Candidate('','','', 0, '', false, this.address);

  constructor(public httpService: HttpService,
    private router: Router,
    private login: LoginComponent) { }

  ngOnInit() {
  }


  registerCandidate() {

    console.log(JSON.stringify(this.candidate))
    this.httpService.registerCandidate(this.candidate).subscribe(
      response => {
        console.log(response.registrationId+ " : "+ response.status)
        this.authenticateUser(this.candidate.username, this.candidate.password)
      }
    ,
    error=> console.error("Error Response : "+ error))
  }

  authenticateUser(username:string, password:string) {
    this.httpService.authenticateUser(username, password)
    .subscribe(response => {
      this.login.loginSuccessMessage = "Account Created Successfully. Please Login Now. !!"
      this.router.navigate(["login"])

    })

  }

}
