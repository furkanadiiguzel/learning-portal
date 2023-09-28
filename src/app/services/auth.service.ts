import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "http://localhost:5094/api/User/"
  constructor(private http: HttpClient, private router: Router) { }

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


}
