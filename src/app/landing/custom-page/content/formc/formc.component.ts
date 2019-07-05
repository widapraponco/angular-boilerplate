import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormcdataService } from '../../../../_services/formcdata.service';

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
  data = new FormcdataService();
  // no: number;
  // images: 'https://material.angular.io/assets/img/examples/shiba1.jpg';
  // name: string;
  // address: string;
  // no_telp: number;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(FormcDialogComponent, {
      width: '250px',
      data: this.data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(this.data);
      // this.no = result;
      // this.images = result;
      // this.name = result;
      // this.address = result;
      // this.no_telp = result;
      // this.name = result;
      // this.data = result;
      alert("Hasil Data: " + JSON.stringify(this.data));
    });
  }
  // onSubmit(){
  //   console.log(this.data);
  // }
}


@Component({
  selector: 'formc.dialog.component',
  templateUrl: './formc.dialog.component.html',
})
export class FormcDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<FormcDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FormcdataService) {}

  NoClick(): void {
    this.dialogRef.close();
  }

}
