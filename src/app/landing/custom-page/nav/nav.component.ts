import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CustomPageComponent } from '../custom-page.component';
import { CardhComponent } from '../cardh/cardh.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  //  isinya : string;
  hasil : string;
  // isinya : string[] = [];
  // isi = this.isinya = this.isinya
  isinya(nama){
    if (nama = 'UI') {
      this.hasil = nama;
    } else if (nama = 'chart'){
      this.hasil = nama;
    }
  }

  @Input()
  public sideRight= true;
  public sideRight2= false;


  constructor() { }
  kirim = [ "" ];

  ngOnInit() {

  }

  drawerToggle(e){
    e.toggle();
    // this.sideRight2 = !this.sideRight2;
  }
  @ViewChild(CardhComponent) car: CardhComponent;
  //  kirim: string[] = [];
    // kirim(e){
      
    // }
 
}
