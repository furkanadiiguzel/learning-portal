import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash"
  signUpForm!: FormGroup
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
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



  onSignup() {
    if (this.signUpForm.valid) {
      //send object to the db
      this.auth.signUp(this.signUpForm.value)
        .subscribe({
          next: (res) => {
            console.log(res)
            alert(res.message);
            this.signUpForm.reset();
            this.router.navigate(['login']);
          },
          error: (err) => {
            console.log(err)
            alert(err?.error.message);
          }

        })
    } else {
      console.log("error")
      ValidateForm.validateAllFormsFilled(this.signUpForm);
      alert("Form is invalid");
      //throw error

    }
  }

}

