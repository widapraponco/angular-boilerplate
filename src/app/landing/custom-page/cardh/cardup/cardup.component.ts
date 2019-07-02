import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardup',
  templateUrl: './cardup.component.html',
  styleUrls: ['./cardup.component.sass']
})
export class CardupComponent implements OnInit {
  cards = [  
    { title: 'Pitek', detl: 'Visitor Online',  images: 'https://material.angular.io/assets/img/examples/shiba1.jpg' },  
    { title: 'Ayam', detl: 'Total Sales', images: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },  
    { title: 'Maya', detl: 'Total Project', images: 'https://material.angular.io/assets/img/examples/shiba1.jpg' },  
    { title: 'Dia', detl: 'Today Income', images: 'https://material.angular.io/assets/img/examples/shiba1.jpg' }  
  ];
  constructor() { }

  ngOnInit() {
  }

}
