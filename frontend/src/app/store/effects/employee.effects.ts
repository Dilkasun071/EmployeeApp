import { Injectable } from '@angular/core';
import {EmployeeService} from './../../service/employee.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError} from 'rxjs/operators';
import { of } from 'rxjs';
import {LoadEmployeeAction,LoadEmployeeSuccessAction,LoadEmployeeFailureAction,EmployeeActionTypes} from './../actions/employee.action';
@Injectable()
export class EmployeeEffects{
    
    @Effect() loadEmployee$ = this.actions$
    .pipe(
        ofType<LoadEmployeeAction>(EmployeeActionTypes.LOAD_EMPLOYEE),
        mergeMap(
            ()=>this.employeeService.getEmployeeDetails()
            .pipe(
                map(data => {
                  return new LoadEmployeeSuccessAction(data)
                }),
                catchError(error => of(new LoadEmployeeFailureAction(error)))
              )
        ),
    )

    constructor(private actions$: Actions, private employeeService: EmployeeService){}
}
