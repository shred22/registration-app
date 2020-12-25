import { Component, Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HardcodedAuthenticationService } from "../service/hardcoded-authentication.service";
import { HttpService } from "../service/http.service";

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [LoginComponent]
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  errorMessage: string = "Invalid Credentials .!";
  invalidLogin: boolean = false;
  loginSuccessMessage: string;
  constructor(
    private router: Router,
    private authService: HardcodedAuthenticationService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {}

  handleLogin() {
    console.log("reg landed");
    this.httpService.authenticateUser(this.username, this.password)
    .subscribe(response => {
      this.router.navigate(["home"]);
    },
    error => {this.invalidLogin =true;}
      )


  }
}
