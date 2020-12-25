import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private httpService: HttpService,
    private router: Router) { }

  ngOnInit() {
    console.log("Logging Out")
    this.httpService.logout();
this.router.navigate(['login']);
  }

}
