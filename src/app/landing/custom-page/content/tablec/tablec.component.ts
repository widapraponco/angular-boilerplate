import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormcComponent } from '../formc/formc.component';

@Component({
  selector: 'app-tablec',
  templateUrl: './tablec.component.html',
  styleUrls: ['./tablec.component.sass'],

})
export class TablecComponent implements OnInit {
  users: any;
  displayedColumns: string[] = ['position','images', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  
  constructor(db: AngularFirestore) {
    this.users = db.collection('/user').valueChanges();
}

  ngOnInit() {
  }
  

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  images: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, images: 'https://material.angular.io/assets/img/examples/shiba1.jpg', name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, images: 'https://material.angular.io/assets/img/examples/shiba1.jpg', name: 'Helium', weight: 4.0026, symbol: 'He' },
  {position: 3, images: 'https://material.angular.io/assets/img/examples/shiba1.jpg', name: 'Lithium', weight: 6.941, symbol: 'Li' },
  {position: 4, images: 'https://material.angular.io/assets/img/examples/shiba1.jpg', name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  {position: 5, images: 'https://material.angular.io/assets/img/examples/shiba1.jpg', name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, images: 'https://material.angular.io/assets/img/examples/shiba1.jpg', name: 'Carbon', weight: 12.0107, symbol: 'C' },
  {position: 7, images: 'https://material.angular.io/assets/img/examples/shiba1.jpg', name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  {position: 8, images: 'https://material.angular.io/assets/img/examples/shiba1.jpg', name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  {position: 9, images: 'https://material.angular.io/assets/img/examples/shiba1.jpg', name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  {position: 10, images: 'https://material.angular.io/assets/img/examples/shiba1.jpg', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
