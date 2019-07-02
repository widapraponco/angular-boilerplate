import { Component, OnInit , Input} from '@angular/core';
import { TablecComponent } from '../content/tablec/tablec.component'
import { TablenComponent } from '../content/tablen/tablen.component'
@Component({
  selector: 'app-cardh',
  templateUrl: './cardh.component.html',
  styleUrls: ['./cardh.component.sass']
})
export class CardhComponent implements OnInit {
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
  }

}
