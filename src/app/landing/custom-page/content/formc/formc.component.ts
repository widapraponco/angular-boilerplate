import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormcdataService } from '../../../../_services/formcdata.service';
import { stringify } from '@angular/core/src/render3/util';


// export interface DialogData {
//   no: number;
//   images: 'https://material.angular.io/assets/img/examples/shiba1.jpg';
//   name: string;
//   address: string;
//   no_telp: number;
// }
@Component({
  selector: 'app-formc',
  templateUrl: './formc.component.html',
  styleUrls: ['./formc.component.sass']
})
export class FormcComponent implements OnInit {
  // data = new FormcdataService();
  // no: number;
  // images: 'https://material.angular.io/assets/img/examples/shiba1.jpg';
  // name: string;
  // address: string;
  // no_telp: number;
  image = []
 
  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<FormcDialogComponent>, public data: FormcdataService) { }

  ngOnInit() {
  }

  itemImage = [
    {no: 1, images: 'https://material.angular.io/assets/img/examples/shiba1.jpg'},
    {no: 2, images: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  ]

  addImage(images){
    this.data.getImage(images);
  }

}


@Component({
  selector: 'formc.dialog.component',
  templateUrl: './formc.dialog.component.html',
})
export class FormcDialogComponent {
  constructor( public dialog: MatDialog,
    public dialogRef: MatDialogRef<FormcDialogComponent>,
     public data: FormcdataService) {}
    @Input() mage = this.data.mintaImage();
  // NoClick(): void {
  //   this.dialogRef.close();
  // }
  addItem(no,images,name,address,no_telp){
   var item = {no: no, images: images, name: name, address: address, no_telp: no_telp};
    this.data.addItem(item);
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(FormcComponent, {
      width: '500px',
      height: '500px',
      data: this.data
    });
  }

}
