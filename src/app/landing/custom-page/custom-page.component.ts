import { Component, OnInit } from '@angular/core';
import { ItemCardComponent } from '../../_shared/item-card/item-card.component';
import { ShopPageComponent } from '../shop-page/shop-page.component';
import { SideComponent } from './side/side.component';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.sass']
})
export class CustomPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
