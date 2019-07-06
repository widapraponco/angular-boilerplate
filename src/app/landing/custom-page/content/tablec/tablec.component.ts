import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormcComponent } from '../formc/formc.component';
import { FormcdataService } from '../../../../_services/formcdata.service';
import { database } from 'firebase';


@Component({
  selector: 'app-tablec',
  templateUrl: './tablec.component.html',
  styleUrls: ['./tablec.component.sass'],

})
export class TablecComponent implements OnInit {
  // data = new FormcdataService();
  displayedColumns : string[] = ['no', 'images', 'name', 'address', 'no_telp'];
  dataSource = this.data.getItem();
  
  constructor(private data : FormcdataService) {
    console.log(this.dataSource);
}
  ngOnInit() {
  
  }
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {no: '1', images: 'https://material.angular.io/assets/img/examples/shiba1.jpg', name: 'hafid', address: 'Lumajang', no_telp: '0998'},
// ];

