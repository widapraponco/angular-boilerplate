import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  kirim: string[] = [];
  @Input()
  public sideRight= true;
  public sideRight2= false;
  
  constructor() { }

  ngOnInit() {
  }

  drawerToggle(e){
    e.toggle();
    // this.sideRight2 = !this.sideRight2;
  }

}
