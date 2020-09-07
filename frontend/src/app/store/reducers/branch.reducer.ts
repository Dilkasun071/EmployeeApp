import {BranchAction, BranchActionTypes} from '../actions/branch.action';
import { Branch } from './../../models/Branch';

export interface BranchState{
    list: Branch[],
    loading: boolean,
    error: Error
};

const initialState: BranchState = {
    list: [],
    loading: false,
    error: undefined
};

export function BranchReducer(
    state:  BranchState = initialState, 
    action: BranchAction,
){
    switch (action.type) {
        case BranchActionTypes.LOAD_BRANCH:
          return {
            ...state,
            loading: true
        }
        case BranchActionTypes.LOAD_BRANCH_SUCCESS:
          return {
            ...state,
            list: action.payload,
            loading: false
        }
        
        case BranchActionTypes.LOAD_BRANCH_FAILURE: 
          return {
            ...state,
            error: action.payload,
            loading: false
        }
        default:
            return state;
    }
}