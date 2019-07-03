import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.sass']
})
export class ItemCardComponent implements OnInit {
  @Input() useDetails : boolean = true;
  @Input() useCartBtn : boolean = true;

  @Input() width : number = 150;
  @Input() height : number = 150;

  @Input() hImage : number = 200;

  @Input() bgColor : string;
  @Input() ItemName: string;
  @Input() Satuan: string;
  @Input() Diskon: string;
  @Input() Harga: string;

  constructor() { }

  src: string ="https://placeimg.com/"+ this.width +"/"+ this.hImage +"/any";

  ngOnInit() {
  }

}
