import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-popdialog',
  templateUrl: './popdialog.component.html',
  styleUrls: ['./popdialog.component.sass']
})
export class PopdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
