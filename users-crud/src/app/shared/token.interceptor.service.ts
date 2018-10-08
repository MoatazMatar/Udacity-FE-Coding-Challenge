import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  @BlockUI() BlockUI: NgBlockUI;
  user_token = sessionStorage.getItem('token');

  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url === environment.apiEndpoint + '/api/register') {
      return next.handle(request);
    } else {
      if (!this.user_token) {
        CommonService.ErrorMessage('You should login first');
        this.router.navigate(['/login']);
      } else {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.user_token}`
          }
        });
        return next.handle(request);
      }
    }
  }
}
