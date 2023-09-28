import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "http://localhost:5094/api/User/"
  private userPayLoad: any;
  constructor(private http: HttpClient, private router: Router) {
    this.userPayLoad = this.decodedToken();
  }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`, userObj)
  }
  signOut(){
    localStorage.removeItem('token')
    this.router.navigate(['login'])

  }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj)
  }
  storeToken(tokenValue: string){
    localStorage.setItem('token',tokenValue)
  }
  getToken(){
    return localStorage.getItem('token')
  }

  IsLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }
  decodedToken(){
    const helper = new JwtHelperService();
    const token = this.getToken()!;
    return helper.decodeToken(token);
  }
  getFullNameFromToken(){
    if(this.userPayLoad){
      return this.userPayLoad.fullName;
    }
  }
  getRoleFromToken(){
    if(this.userPayLoad){
      return this.userPayLoad.role;
    }
  }



}
