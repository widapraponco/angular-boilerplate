import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, animate,transition, query, stagger,} from '@angular/animations';

@Component({
  selector: 'app-cardup',
  templateUrl: './cardup.component.html',
  styleUrls: ['./cardup.component.sass'],
  animations: [
    trigger('openClose', [
      transition('* => *',[
        query('.cards', style({ opacity: 0, transform: 'translateY(-40px)' })),
        query('.cards', stagger(600, [
          animate(`500ms ease-out`, style({ opacity: 1, transform: 'translateY(0)' }))
        ]))
      ])
    ]),
  ]
})
export class CardupComponent implements OnInit {
  // isOpen = false;
  // Toggle() {
  //   this.isOpen = !this.isOpen;
  // }
  cards = [  
    { title: 'Pitek', detl: 'Visitor Online',  images: 'https://material.angular.io/assets/img/examples/shiba1.jpg' },  
    { title: 'Ayam', detl: 'Total Sales', images: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },  
    { title: 'Maya', detl: 'Total Project', images: 'https://material.angular.io/assets/img/examples/shiba1.jpg' },  
    { title: 'Dia', detl: 'Today Income', images: 'https://material.angular.io/assets/img/examples/shiba1.jpg' }  
  ];
  constructor() {
    
   }

  ngOnInit() {
   
  }

}
