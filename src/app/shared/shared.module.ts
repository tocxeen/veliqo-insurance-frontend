import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './frame/frame.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    FrameComponent,
    NavbarComponent,
    SidebarComponent,
    TableComponent,
  ],
  exports: [FrameComponent, NavbarComponent, SidebarComponent, TableComponent],
})
export class SharedModule {}
