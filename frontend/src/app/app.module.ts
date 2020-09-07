import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { EmployeeEffects } from './store/effects/employee.effects';
import { EmployeeReducer } from './store/reducers/employee.reducer';
import { BranchReducer } from './store/reducers/branch.reducer';
import { BranchEffects } from './store/effects/branch.effects';
import { ValidateEqualModule } from 'ng-validate-equal';
import { FormsModule }   from '@angular/forms';

import { NavigationComponent } from "./components/navigation/navigation.component";
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { AuthInterceptorService } from "./service/auth-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NavigationComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({employing: EmployeeReducer,branching: BranchReducer}),
    EffectsModule.forRoot([EmployeeEffects,BranchEffects]),
    NgbModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ValidateEqualModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
