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

  buttons=[
    {id:1, name:'MAN', split:"|"},
    {id:2, name:'WOMAN', split:"|"}, 
    {id:3, name:'CHILD', split:"|"}
  ];

  carousel=[
  {id:1, url:'https://placeimg.com/700/300/any',name:'Programer'},
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
  
}

