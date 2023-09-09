import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash"
  hideShowPass(){
    this.isText = !this.isText;
    if(this.isText){
      this.type = "text";
      this.eyeIcon = "fa-eye";
    }else{
      this.type = "password";
      this.eyeIcon = "fa-eye-slash";
    }
  }

}
