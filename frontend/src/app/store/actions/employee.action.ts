import { Action } from '@ngrx/store';
import { EmployeeDetails } from '../../models/EmployeeDetails';

export enum EmployeeActionTypes{
    LOAD_EMPLOYEE = '[Employee] Load Employee List',
    LOAD_EMPLOYEE_SUCCESS = '[Employee] Load Employee List Success',
    LOAD_EMPLOYEE_FAILURE = '[Employee] Load Employee List Failure',
}

export class LoadEmployeeAction implements Action {
    readonly type = EmployeeActionTypes.LOAD_EMPLOYEE
}

export class LoadEmployeeSuccessAction implements Action {
    readonly type = EmployeeActionTypes.LOAD_EMPLOYEE_SUCCESS
    constructor(public payload: Array<EmployeeDetails>) {}
}

export class LoadEmployeeFailureAction implements Action {
   readonly type = EmployeeActionTypes.LOAD_EMPLOYEE_FAILURE
   constructor(public payload: Error) {}
}

export type EmployeeAction = LoadEmployeeAction |
LoadEmployeeSuccessAction |
LoadEmployeeFailureAction
