import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { ResetComponent } from './auth/reset/reset.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { PolicyComponent } from './policy/policy.component';
import { PolicyFormComponent } from './policy/policy-form/policy-form.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    ResetComponent,
    DashboardComponent,
    UsersComponent,
    UserFormComponent,
    ApplicantsComponent,
    TransactionsComponent,
    PolicyComponent,
    PolicyFormComponent
  ]
})
export class PagesModule { }
