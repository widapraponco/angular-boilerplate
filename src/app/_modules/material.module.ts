import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule, MatDividerModule,
  MatFormFieldModule, MatInputModule, MatToolbarModule, MatSidenavModule, MatGridListModule,
  MatMenuModule, MatBadgeModule, MatSelectModule, MatListModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
    MatCardModule, MatIconModule, MatDividerModule, MatSidenavModule,
    MatMenuModule, MatBadgeModule, MatSelectModule, MatListModule, MatGridListModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
    MatCardModule, MatIconModule, MatDividerModule, MatSidenavModule,
    MatMenuModule, MatBadgeModule, MatSelectModule, MatListModule, MatGridListModule,
  ]
})
export class MaterialModule { }
