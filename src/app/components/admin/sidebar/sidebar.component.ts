import { Component, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private loginService:LoginComponent) { }



  ngOnInit(): void {
  }


  /**
   * logout
   */

    public logout() {

    }


}
