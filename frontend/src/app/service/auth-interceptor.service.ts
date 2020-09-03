import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";

import { Observable } from "rxjs";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: "root",
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");
    if (token) {
      const clonedRequest = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + token),
      });
      return next.handle(clonedRequest);
    } else {
      return next.handle(req);
    }
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }
}