import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      empEmail: new FormControl("", [Validators.required, Validators.email]),
      empPassword: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  login(): void {
    this.authService
      .login(this.loginForm.value.empEmail, this.loginForm.value.empPassword)
      .subscribe();
  }
}
