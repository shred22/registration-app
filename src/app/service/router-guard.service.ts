import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate{

  constructor(private authService: HardcodedAuthenticationService,
    public router: Router) { }
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authService.isUserLoggedIn()){
      return true
    }
    this.router.navigate(["login"])
    return false
  }
}
