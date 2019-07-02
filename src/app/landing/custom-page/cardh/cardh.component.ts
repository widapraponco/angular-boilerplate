import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-cardh',
  templateUrl: './cardh.component.html',
  styleUrls: ['./cardh.component.sass']
})
export class CardhComponent implements OnInit {
  cards = [  
    { title: 'Card 1', cols: 2, rows: 1 },  
    { title: 'Card 2', cols: 1, rows: 1 },  
    { title: 'Card 3', cols: 1, rows: 2 },  
    { title: 'Card 4', cols: 1, rows: 1 }  
  ];  
  constructor() { }

  ngOnInit() {
  }

}
