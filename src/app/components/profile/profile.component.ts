import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {




  user:any;


  constructor(private login:LoginComponent) { }

  ngOnInit(): void {

    this.user=this.login.getUserDetailsFromLocalStorage();



  }

}
