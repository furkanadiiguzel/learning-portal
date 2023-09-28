import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  public fullname : string = "";
  constructor(private auth: AuthService, private userStore: UserStoreService){}
  ngOnInit(){
    this.userStore.getFullNameFromStore()
    .subscribe(val=>{
      let FullNameFromToken = this.auth.getFullNameFromToken();
      this.fullname = val || FullNameFromToken;
  });

  }


  logout(){
    this.auth.signOut();
  }




}
