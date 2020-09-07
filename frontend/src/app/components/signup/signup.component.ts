import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthService } from '../../service/auth.service';
import { Branch } from './../../models/Branch';
import { BranchStates } from '../../store/states/branchstate';
import { LoadBranchAction } from '../../store/actions/branch.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  
  branchId: Observable<Array<Branch>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  constructor(private store: Store<BranchStates>,private authService: AuthService, private router: Router) {}

  ngOnInit(): void {;
    this.branchId = this.store.select(store => store.branching.list);
    this.loading$ = this.store.select(store => store.branching.loading);
    this.error$ = this.store.select(store => store.branching.error);
    this.store.dispatch(new LoadBranchAction());
    console.log(this.branchId.subscribe(value => {
      console.log(value);
    }));
    this.signupForm = this.createFormGroup();
  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      empId: new FormControl("", [Validators.required, Validators.minLength(1)]),
      empName: new FormControl("", [Validators.required, Validators.minLength(2)]),
      empEmail: new FormControl("", [Validators.required, Validators.email]),
      empBranchId: new FormControl("", [Validators.required]  ),
      empPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
      ]),
      empComPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
      ]),
      empPhoto: new FormControl("", [Validators.required, Validators.minLength(2)]),
      empAddress: new FormControl("", [Validators.required, Validators.minLength(2)]),
    });
  } 

  signup(): void {
    console.log(this.signupForm.value);
    this.authService.signup(this.signupForm.value).subscribe((msg) => {
      this.router.navigate(["login"]);
    });
  }

}
