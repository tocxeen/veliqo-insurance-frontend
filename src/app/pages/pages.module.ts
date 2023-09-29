import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { PagesRoutingModule } from './pages.routing';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ],
  declarations: [DashboardComponent, UsersComponent, ApplicantsComponent, TransactionsComponent]
})
export class PagesModule { }
