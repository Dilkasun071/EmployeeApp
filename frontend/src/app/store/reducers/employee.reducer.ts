import {EmployeeAction, EmployeeActionTypes} from '../actions/employee.action';
import {EmployeeDetails} from '../../models/EmployeeDetails'

export interface EmployeeState{
    list: EmployeeDetails[],
    loading: boolean,
    error: Error
};

const initialState: EmployeeState = {
    list: [],
    loading: false,
    error: undefined
};

export function EmployeeReducer(
    state:  EmployeeState = initialState, 
    action: EmployeeAction,
){
    switch (action.type) {
        case EmployeeActionTypes.LOAD_EMPLOYEE:
          return {
            ...state,
            loading: true
        }
        case EmployeeActionTypes.LOAD_EMPLOYEE_SUCCESS:
          return {
            ...state,
            list: action.payload,
            loading: false
        }
        
        case EmployeeActionTypes.LOAD_EMPLOYEE_FAILURE: 
          return {
            ...state,
            error: action.payload,
            loading: false
        }
        default:
            return state;
    }
}