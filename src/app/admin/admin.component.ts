import { Component, OnInit, ViewChild } from '@angular/core';
import { TopbarComponent } from './topbar/topbar.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  public showSideNav = false;

  constructor() { }

  ngOnInit() {
  }

  @ViewChild(TopbarComponent) topbar: TopbarComponent;
  sidenavToggle(e) {
    e.toggle();
    this.topbar.withSidenav = !this.topbar.withSidenav ;
  }

}
