import { Action } from '@ngrx/store';
import { Branch } from './../../models/Branch';

export enum BranchActionTypes{
    LOAD_BRANCH= '[Branch] Load Branch List',
    LOAD_BRANCH_SUCCESS = '[Branch] Load Branch List Success',
    LOAD_BRANCH_FAILURE = '[Branch] Load Branch List Failure',
}

export class LoadBranchAction implements Action {
    readonly type = BranchActionTypes.LOAD_BRANCH
}

export class LoadBranchSuccessAction implements Action {
    readonly type = BranchActionTypes.LOAD_BRANCH_SUCCESS
    constructor(public payload: Array<Branch>) {}
}

export class LoadBranchFailureAction implements Action {
   readonly type = BranchActionTypes.LOAD_BRANCH_FAILURE
   constructor(public payload: Error) {}
}

export type BranchAction = LoadBranchAction |
LoadBranchSuccessAction |
LoadBranchFailureAction
