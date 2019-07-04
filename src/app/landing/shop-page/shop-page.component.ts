import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.sass'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),
      transition('void => *', [
        animate(2000)
      ]),

      transition('* => void', [
        animate(2000)
      ])
    ])
  ]
})
export class ShopPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
