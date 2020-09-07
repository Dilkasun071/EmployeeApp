import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, } from "@angular/common/http";
import { delay } from "rxjs/operators";
import { Branch } from './../models/Branch';
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  private BRANCH_LIST = "http://localhost:3000/branch/id";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService) { 
  }

  getBranchId(){
    return this.http.get<Branch[]>(
      this.BRANCH_LIST,{
        observe:'body',
        params: new HttpParams().append('token', localStorage.getItem('token'))
      }
    )
  }
}

