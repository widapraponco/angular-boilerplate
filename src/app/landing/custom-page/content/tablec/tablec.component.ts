import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormcComponent, FormcDialogComponent } from '../formc/formc.component';
import { FormcdataService } from '../../../../_services/formcdata.service';
import { database } from 'firebase';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-tablec',
  templateUrl: './tablec.component.html',
  styleUrls: ['./tablec.component.sass'],

})
export class TablecComponent implements OnInit {
  // data = new FormcdataService();
  displayedColumns : string[] = ['no', 'images', 'name', 'address', 'no_telp'];
  dataSource = this.data.getItem();
  
  constructor(public dialog: MatDialog, public data: FormcdataService) {
    console.log(this.dataSource);
}
  ngOnInit() {
  
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(FormcDialogComponent, {
      width: '250px',
      data: this.data
    });
}
}
// const ELEMENT_DATA: PeriodicElement[] = [
//   {no: '1', images: 'https://material.angular.io/assets/img/examples/shiba1.jpg', name: 'hafid', address: 'Lumajang', no_telp: '0998'},
// ];

