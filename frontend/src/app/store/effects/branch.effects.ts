import { Injectable } from '@angular/core';
import { BranchService } from './../../service/branch.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError} from 'rxjs/operators';
import { of } from 'rxjs';
import {LoadBranchAction,LoadBranchFailureAction,LoadBranchSuccessAction,BranchActionTypes} from './../actions/branch.action';
@Injectable()
export class BranchEffects{
    
    @Effect() loadBranch = this.actions$
    .pipe(
        ofType<LoadBranchAction>(BranchActionTypes.LOAD_BRANCH),
        mergeMap(
            ()=>this.branchService.getBranchId()
            .pipe(
                map(data => {
                  return new LoadBranchSuccessAction(data)
                }),
                catchError(error => of(new LoadBranchFailureAction(error)))
              )
        ),
    )

    constructor(private actions$: Actions, private branchService: BranchService){}
}
