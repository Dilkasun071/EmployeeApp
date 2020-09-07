import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, } from "@angular/common/http";
import { delay } from "rxjs/operators";

import { EmployeeDetails } from "../models/EmployeeDetails";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private EMPLOYEE_DETAILS_URL = "http://localhost:3000/employees/list";
 
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
    )
  { }

  getEmployeeDetails(){
    return this.http.get<EmployeeDetails[]>(
      this.EMPLOYEE_DETAILS_URL,{
        observe:'body',
        params: new HttpParams().append('token', localStorage.getItem('token'))
      }
    )
  }
}
