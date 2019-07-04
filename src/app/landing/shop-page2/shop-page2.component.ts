import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { post } from 'selenium-webdriver/http';
import {PopdialogComponent} from '../../_shared/popdialog/popdialog.component';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-shop-page2',
  templateUrl: './shop-page2.component.html',
  styleUrls: ['./shop-page2.component.sass']
})
export class ShopPage2Component implements OnInit {
  
  animal: string;
  name: string;
  itemkart: StringifyOptions;
  

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
    this.itemkart = this.kategoris['MAN'];
  }

  kuning="#FFFACD";
  merah="#F08080";
  asal="MAN";

  buttons=[
    {id:1, name:'MAN', split:"|"},
    {id:2, name:'WOMAN', split:"|"}, 
    {id:3, name:'CHILD', split:"|"}
  ];

  kategoris= {
    'MAN':[
          {
            name:"SEPATU",
            satuan:"pasang",
            harga:" IDR 100 K",
            diskon:"50%",
            img:"https://id-test-11.slatic.net/p/2/salvo-sepatu-kets-sneakers-dan-kasual-pria-/-sepatu-kasual-kanvas-/-sepatu-sneaker-pria-/-sepatu-pria-/-sepatu-sneaker-murah-/sepatu-pria-casual-/sepatu-pria-kasual-/-sepatu-pria-kulit-/-sepatu-pria-murah-/-rk01-hitam-1234-16190315-972cb998df12969031be73151f13577a.jpg"},
          {
            name:"JAS",
            satuan:"pcs",
            harga:" IDR 200 K",
            diskon:"20%",
            img:"https://id-test-11.slatic.net/original/91db6380fcef713ab901a0f4fbe3b119.jpg"},
          {
            name:"CELANA",
            satuan:"pcs",
            harga:" IDR 150 K",
            diskon:"30%",
            img:"https://apollo-singapore.akamaized.net/v1/files/6ljc8d5shy522-ID/image;s=966x691;olx-st/_1_.jpg"}
        ],
   'WOMAN':[
    {
      name:"WEDGES",
      satuan:"pasang",
      harga:" IDR 100 K",
      diskon:"50%",
      img:"https://cdn.shopify.com/s/files/1/0292/6509/products/espadrilles-wedges-womens-gray-roses-viscata-1.jpg?v=1530434597"},
    {
      name:"BLOUSE",
      satuan:"pcs",
      harga:" IDR 200 K",
      diskon:"20%",
      img:"https://media.cabiclio.com/products/335525-20181031150114.jpeg?w=877"},
    {
      name:"SPAN",
      satuan:"pcs",
      harga:" IDR 150 K",
      diskon:"30%",
      img:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//752/rasya_rasya-rok-span-wedges---navy_full04.jpg"}
  ],
    CHILD:[
      {
        name:"SANDAL",
        satuan:"pasang",
        harga:" IDR 50 K",
        diskon:"10%",
        img:"https://id-test-11.slatic.net/p/c0151f9eea43a015feaed13fa7012165.jpg"},
      {
        name:"KAOS",
        satuan:"pcs",
        harga:" IDR 10 K",
        diskon:"20%",
        img:"https://s3.bukalapak.com/img/3404448416/w-1000/Kaos_anak_jumpkids_karakter_minion.jpg"},
      {
        name:"CELANA PENDEK",
        satuan:"pcs",
        harga:" IDR 100 K",
        diskon:"25%",
        img:"https://id-test-11.slatic.net/p/598169ec3ed085052b0c2159013db0a6.jpg"}
    ]
  }

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

    this.itemkart = this.kategoris[topbutton];
    
    // if(topbutton=='MAN'){
    //   this.itemkart=topbutton;
    // console.log(this.itemkart);
    // }
    // else if(topbutton=='WOMAN'){
    //   this.itemkart=topbutton;
    // console.log(this.itemkart);
    // }
    // else if(topbutton=='CHILD'){
    //   this.itemkart=topbutton;
    // console.log(this.itemkart);
    // }
    // else{
    // console.log(this.itemkart);
    // }
   
  }
  
}

