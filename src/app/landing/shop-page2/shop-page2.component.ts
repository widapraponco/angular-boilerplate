import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-page2',
  templateUrl: './shop-page2.component.html',
  styleUrls: ['./shop-page2.component.sass']
})
export class ShopPage2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  carousel=[1,2,3,4,5];

  backward() {
    var imageback='back';
    console.log(this.carousel[0]-1);
  }

  forward() {
    var imagefor='forward';
    console.log(imagefor);
  }
}

