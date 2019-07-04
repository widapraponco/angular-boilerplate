import { Component, OnInit, ViewChild } from '@angular/core';
import { TopbarComponent } from './topbar/topbar.component';
import { AuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  public showSideNav = false;
  // private user: SocialUser;
  // private loggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // this.authService.authState.subscribe((user)=>{
    //   this.user = user;
    //   this.loggedIn = (user != null);
    //
    //   console.log(this.user);
    // })
  }

  @ViewChild(TopbarComponent) topbar: TopbarComponent;
  sidenavToggle(e) {
    e.toggle();
    this.topbar.withSidenav = !this.topbar.withSidenav ;
  }

}
