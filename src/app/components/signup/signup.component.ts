import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
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

  private validateAllFormsFilled(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        control.markAsDirty({ onlySelf: true })

      }
      else if (control instanceof FormGroup) {
        this.validateAllFormsFilled(control)
      }
    }
    )

  }

  onSignup() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value)
      //send object to the db
    } else {
      console.log("error")
      this.validateAllFormsFilled(this.signUpForm);
      alert("Form is invalid");
      //throw error

    }
  }

}

