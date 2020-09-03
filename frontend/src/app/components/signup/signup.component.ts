import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      empId: new FormControl("", [Validators.required, Validators.minLength(1)]),
      empName: new FormControl("", [Validators.required, Validators.minLength(2)]),
      empEmail: new FormControl("", [Validators.required, Validators.email]),
      empPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
      ]),
      empPhoto: new FormControl("", [Validators.required, Validators.minLength(2)]),
      empAddress: new FormControl("", [Validators.required, Validators.minLength(2)]),
      empBranchId: new FormControl("", [Validators.required, Validators.minLength(1)]),
    });
  }

  signup(): void {
    this.authService.signup(this.signupForm.value).subscribe((msg) => {
      this.router.navigate(["login"]);
    });
  }

}
