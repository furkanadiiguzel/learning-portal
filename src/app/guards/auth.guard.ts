import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router){}
  canActivate(): boolean{
    if(this.auth.IsLoggedIn()){
      return true

    }
    else{
      alert("Please log in first")
      this.router.navigate(['login'])
      return false;
    }
  }

}
