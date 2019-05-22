import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule, MatDividerModule,
  MatFormFieldModule, MatInputModule, MatToolbarModule, MatSidenavModule,
  MatMenuModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
    MatCardModule, MatIconModule, MatDividerModule, MatSidenavModule,
    MatMenuModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
    MatCardModule, MatIconModule, MatDividerModule, MatSidenavModule,
    MatMenuModule,
  ]
})
export class MaterialModule { }
