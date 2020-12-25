import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private httpService:HttpService,
    private activatedRoute: ActivatedRoute) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let jwtToken = this.httpService.getAuthenticatedToken();
    let username = this.httpService.getAuthenticatedUser()

    console.log(`Interceptor ${jwtToken} : ${username}`)

    if(jwtToken && username) {

      request = request.clone({
        setHeaders : {
            Authorization : jwtToken
          }
        })
    }
    return next.handle(request);
  }
}
