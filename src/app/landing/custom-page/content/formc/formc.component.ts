import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formc',
  templateUrl: './formc.component.html',
  styleUrls: ['./formc.component.sass']
})
export class FormcComponent implements OnInit {
  public ownerForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }
 
}
