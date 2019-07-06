import { Component, OnInit } from '@angular/core';
import { FormcdataService } from '../../../../_services/formcdata.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-tablen',
  templateUrl: './tablen.component.html',
  styleUrls: ['./tablen.component.sass'],

})
export class TablenComponent implements OnInit {
  dataSource = this.data.getItem();
  constructor(private data : FormcdataService) { }

  ngOnInit() {
  }

}
