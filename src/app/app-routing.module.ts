import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantsComponent } from './pages/applicants/applicants.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ResetComponent } from './pages/auth/reset/reset.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { UsersComponent } from './pages/users/users.component';


const routes: Routes = [
  { path: 'applicants', component: ApplicantsComponent },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reset', component: ResetComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
