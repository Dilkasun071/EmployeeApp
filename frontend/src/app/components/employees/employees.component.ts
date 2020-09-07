import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from '../../models/EmployeeDetails';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/states/appstate';
import { LoadEmployeeAction } from '../../store/actions/employee.action';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  isAuthenticated = false;
  employeeDetails: Observable<Array<EmployeeDetails>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.employeeDetails = this.store.select(store => store.employing.list);
    this.loading$ = this.store.select(store => store.employing.loading);
    this.error$ = this.store.select(store => store.employing.error);
    this.store.dispatch(new LoadEmployeeAction());
    console.log(this.employeeDetails.subscribe(value => {
      console.log(value);
    }));
   }

   
}
