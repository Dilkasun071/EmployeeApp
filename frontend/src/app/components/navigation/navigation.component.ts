import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isAuthenticated = false;
  constructor(private authService: AuthService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.authService.isEmpLoggedIn$.subscribe((isLoggedIn) => {
      this.isAuthenticated = isLoggedIn;
    });
  }

  logout(): void {
    localStorage.removeItem("token");
    this.authService.isEmpLoggedIn$.next(false);
    localStorage.removeItem("logged");
    this.router.navigate(["login"]);
  }

}
