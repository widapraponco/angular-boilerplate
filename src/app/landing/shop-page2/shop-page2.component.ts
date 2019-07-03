import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { post } from 'selenium-webdriver/http';
import {PopdialogComponent} from '../../_shared/popdialog/popdialog.component';

@Component({
  selector: 'app-shop-page2',
  templateUrl: './shop-page2.component.html',
  styleUrls: ['./shop-page2.component.sass']
})
export class ShopPage2Component implements OnInit {
  
  animal: string;
  name: string;
  //src: string;

  constructor(public dialog: MatDialog) {}

  openDialog(itemcard): void {
    const dialogRef = this.dialog.open(PopdialogComponent, {
      width: '500px',
      data: {name: this.name, animal: this.animal, src: itemcard.src }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(itemcard);
      this.animal = result;
    });
  }

  ngOnInit() {
  }

  kuning="#FFFACD";
  merah="#F08080";
  mn="man";
  mns="let man of mans";
  wmn="woman";
  wmns="let woman of womans";
  ch="child";
  chs="let child of childs";

  buttons=[
    {id:1, name:'MAN', split:"|"},
    {id:2, name:'WOMAN', split:"|"}, 
    {id:3, name:'CHILD', split:"|"}
  ];

  kategori= {
    "MAN":[
          {
            name:"sepatu",
            satuan:"pasang",
            harga:" IDR 100 K",
            diskon:"50%"},
          {
            name:"sepatu",
            satuan:"pasang",
            harga:" IDR 100 K",
            diskon:"50%"},
          {
            name:"sepatu",
            satuan:"pasang",
            harga:" IDR 100 K",
            diskon:"50%"}
        ],
   "WOMAN":[
    {
      name:"sepatu",
      satuan:"pasang",
      harga:" IDR 100 K",
      diskon:"50%"},
    {
      name:"sepatu",
      satuan:"pasang",
      harga:" IDR 100 K",
      diskon:"50%"},
    {
      name:"sepatu",
      satuan:"pasang",
      harga:" IDR 100 K",
      diskon:"50%"}
  ],
  //  CHILD:[{name:"SEPATU1",satuan:"pasang",harga:" IDR 100 K",diskon:"50%"}]
  }

  mans=[
    {name:"SEPATU",satuan:"pasang",harga:" IDR 100 K",diskon:"50%"},
    {name:"KEMEJA",satuan:"pcs",harga:" IDR 200 K",diskon:"10%"},
    {name:"CELANA",satuan:"pcs",harga:" IDR 250 K",diskon:"40%"}
  ];
  womans=[
    {name:"SEPATU1",satuan:"pasang",harga:" IDR 100 K",diskon:"50%"},
    {name:"KEMEJA11",satuan:"pcs",harga:" IDR 200 K",diskon:"10%"},
    {name:"CELANA1",satuan:"pcs",harga:" IDR 250 K",diskon:"40%"}
  ];
  childs=[
    {name:"SEPATU2",satuan:"pasang",harga:" IDR 100 K",diskon:"50%"},
    {name:"KEMEJA2",satuan:"pcs",harga:" IDR 200 K",diskon:"10%"},
    {name:"CELANA2",satuan:"pcs",harga:" IDR 250 K",diskon:"40%"}
  ];
  carousel=[
  {id:1, url:'https://placeimg.com/700/300/any',name:'Cloudy'},
  {id:2, url:'https://www.virginexperiencedays.co.uk/content/img/product/large/the-view-from-the-12102928.jpg',name:'Sunset'},
  {id:3, url:'https://s-ec.bstatic.com/images/hotel/max1024x768/175/175016579.jpg',name:'Sunrise'},
  ];
  i=0;

  backward() {
    this.i=this.i-1
      if(this.i < 0){
        this.i=this.carousel.length-1
        console.log(this.carousel[this.i]);
      }
      else{
        console.log(this.carousel[this.i]);
      }
  }

  forward() {
    this.i=this.i+1
      if(this.i >= this.carousel.length){
        this.i=0
        console.log(this.carousel[this.i]);
      }
      else{
        console.log(this.carousel[this.i]);
      }
  }

  warna(j){
    
      if( j %2 == 0){
        return this.kuning ;
        }
      else{
        return this.merah ;
        }
  }

  itemshow(topbutton){
    
    console.log(this.kategori[topbutton]);
    
  }
  
}

