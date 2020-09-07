import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable, BehaviorSubject, of } from "rxjs";
import { first, catchError, tap, subscribeOn } from "rxjs/operators";

import { Employee } from "../models/Employee";
import { User } from "../models/User";
import { ErrorHandlerService } from "./error-handler.service";
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:3000/auth";

  isEmpLoggedIn$ = new BehaviorSubject<boolean>(false);
  empId: Pick<Employee, "empId">;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {}
  
  signup(employee: Omit<Employee, "empId">): Observable<Employee> {
    return this.http
      .post<Employee>(`${this.url}/signup`, employee, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<Employee>("signup"))
      );
  }

  login(
    empEmail: Pick<User, "empEmail">,
    empPassword: Pick<User, "empPassword">
  ): Observable<{
    token: string;
    empId: Pick<User, "empId">;
  }> {
    return this.http
      .post(`${this.url}/login`, { empEmail, empPassword }, this.httpOptions)
      .pipe(
        first(),
        tap((tokenObject: { token: string; empId: Pick<User, "empId"> }) => {
          this.empId = tokenObject.empId;
          localStorage.setItem("token", tokenObject.token);
          this.isEmpLoggedIn$.next(true);
          localStorage.setItem("logged","yes");
          this.router.navigate(["/employee"]);
        }),
        catchError(
          this.errorHandlerService.handleError<{
            token: string;
            empId: Pick<User, "empId">;
          }>("login")
        )
      );
  }
}
