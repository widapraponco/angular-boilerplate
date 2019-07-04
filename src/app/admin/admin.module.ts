import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

import { MaterialModule } from '../_modules';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    TopbarComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class AdminModule { }
