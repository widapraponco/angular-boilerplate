import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardup',
  templateUrl: './cardup.component.html',
  styleUrls: ['./cardup.component.sass']
})
export class CardupComponent implements OnInit {
  cards = [  
    { title: 'Pitek', detl: 'Visitor Online',  images: 'https://material.angular.io/assets/img/examples/shiba1.jpg' },  
    { title: 'Ayam', detl: 'Total Sales', cols: 1, rows: 1 },  
    { title: 'Maya', detl: 'Total Project', cols: 1, rows: 2 },  
    { title: 'Dia', detl: 'Today Income', cols: 1, rows: 1 }  
  ];
  constructor() { }

  ngOnInit() {
  }

}
