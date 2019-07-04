import { Component, OnInit , Input} from '@angular/core';
import { TablecComponent } from '../content/tablec/tablec.component';
import { TablenComponent } from '../content/tablen/tablen.component';
import { NavComponent } from '../nav/nav.component';
import { FormcComponent } from '../content/formc/formc.component';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';


@Component({
  selector: 'app-cardh',
  templateUrl: './cardh.component.html',
  styleUrls: ['./cardh.component.sass']
})
export class CardhComponent implements OnInit {

  @Input() hasil: string;

  cards = [  
    { id: 1, title: 'Card 1', cols: 2, rows: 1 }, 
  ];  
  cards1 = [  
    { id: 2, title: 'Card 2', cols: 1, rows: 2 }, 
  ];  
  cards2 = [   
    { id: 3, title: 'Card 3', cols: 1, rows: 1.5 }  
  ]; 
  constructor() { }

  ngOnInit() {
    console.log(this.hasil);
  }

}
