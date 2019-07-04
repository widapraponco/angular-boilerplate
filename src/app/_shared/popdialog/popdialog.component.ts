import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';

export interface DialogData {
  // animal: string;
  // name: string;
  // src: string;
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

  Cargos=[
    {id:1, name:"JNE"},
    {id:1, name:"JNT"},
    {id:1, name:"TIKI"},
  ];

  nama = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.nama.hasError('required') ? 'You must enter a value' :
        this.nama.hasError('nama') ? 'Not a valid email' :
            '';
  }

}
