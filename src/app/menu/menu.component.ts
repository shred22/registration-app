import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { HttpService } from '../service/http.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authService: HardcodedAuthenticationService,
    public httpService: HttpService) {

  }

  ngOnInit() {

    //this.isUserLoggedIn = this.authService.isUserLoggedIn()
  }

}
