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
import { RouterModule } from '@angular/router';
import { AppCreateComponent } from './auth/app-create/app-create.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { FormBeneficiaryComponent } from './beneficiary/form-beneficiary/form-beneficiary.component';
import { PlanFormComponent } from './plan/plan-form/plan-form.component';
import { PlanComponent } from './plan/plan.component';
import { PlanBeneficiaryComponent } from './plan/plan-beneficiary/plan-beneficiary.component';
import { PlanPolicyComponent } from './plan/plan-policy/plan-policy.component';
import { ApplicantBeneficiaryComponent } from './applicants/applicant-beneficiary/applicant-beneficiary.component';
import { ApplicantPlanComponent } from './applicants/applicant-plan/applicant-plan.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule, ReactiveFormsModule],
  declarations: [
    LoginComponent,
    ResetComponent,
    DashboardComponent,
    UsersComponent,
    UserFormComponent,
    ApplicantsComponent,
    TransactionsComponent,
    PolicyComponent,
    PolicyFormComponent,
    ApplicantsComponent,
    AppCreateComponent,
    BeneficiaryComponent,
    FormBeneficiaryComponent,
    PlanFormComponent,
    PlanComponent,
    PlanBeneficiaryComponent,
    PlanPolicyComponent,
    ApplicantBeneficiaryComponent,
    ApplicantPlanComponent
  ],
})
export class PagesModule {}
