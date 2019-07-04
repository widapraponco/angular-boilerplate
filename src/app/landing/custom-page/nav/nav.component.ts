import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CustomPageComponent } from '../custom-page.component';
import { CardhComponent } from '../cardh/cardh.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  isinya : string = "";


  public sideRight= true;
  public sideRight2= false;


  constructor() { }
  kirim = [ "" ];

  ngOnInit() {

  }
  // set Isinya 
  setIsinya(judul){
    this.isinya = judul
  }

  menus = [
    {id: 1, name: 'UI', icon: 'settings'},
    {id: 2, name: 'Chart', icon: 'insert_chart'},
    {id: 3, name: 'Form', icon: 'phonelink'},
    {id: 4, name: 'Tables', icon: 'computer'},
    {id: 5, name: 'Grid', icon: 'developer_board'},
    {id: 6, name: 'Color', icon: 'toys'},
    {id: 7, name: 'Helper Class', icon: 'help'},
    // {id: [{ nama: ''}, {  }]   }
  ];
  menusb = [
    {id: 1, name: 'Help', icon: 'help'},
    {id: 2, name: 'Contact Phone', icon: 'contact_person'},
    {id: 3, name: 'Contact Support', icon: 'contact_support'},
  ];
  drawerToggle(e){
    e.toggle();
    // this.sideRight2 = !this.sideRight2;
  }
  @ViewChild(CardhComponent) car: CardhComponent;
  //  kirim: string[] = [];
    // kirim(e){
      
    // }
 
}
