import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass() {
    this.isText = !this.isText;
    if (this.isText) {
      this.type = "text";
      this.eyeIcon = "fa-eye";
    } else {
      this.type = "password";
      this.eyeIcon = "fa-eye-slash";
    }
  }
  public getUserDetailsFromLocalStorage() {
    let userStr=localStorage.getItem("user");

    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.removeTokenFromStorage();
      return null;
    }
  }
  public removeTokenFromStorage() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(['login']);
    return true;
  }
  onLogin() {
    if (this.loginForm.valid) {
      if (this.auth.getUserRole() == "ADMIN") {

        //admin dash
        //window.location.href = "/admin";
        this.router.navigate(['admin']);
      } else if (this.auth.getUserRole() == "NORMAL") {

        //usr dash
      //  window.location.href = "/user-dashboard";
      this.router.navigate(['user-dashboard/0']);

      }

      } else {
        console.log("error")
        ValidateForm.validateAllFormsFilled(this.loginForm);
        alert("Form is invalid");
        //throw error

      }




    }


  }





