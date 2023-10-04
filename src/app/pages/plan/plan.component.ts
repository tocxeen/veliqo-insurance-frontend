import { Component, OnInit } from '@angular/core';
import { PlanFormComponent } from './plan-form/plan-form.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService, BeneficiaryService, PlansService, PolicyService } from 'src/app/tools/services';
import { PlanBeneficiaryComponent } from './plan-beneficiary/plan-beneficiary.component';
import { PlanPolicyComponent } from './plan-policy/plan-policy.component';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})
export class PlanComponent implements OnInit {
  plans: any;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private planService: PlansService,
    private beneficiaryService: BeneficiaryService,
    private policyService:PolicyService
  ) {}

  ngOnInit() {
    this.getApplicantPlans();
  }

  getApplicantPlans() {
    this.planService
      .getApplicantPlans(this.authService.getUser()?.username)
      .subscribe((res: any) => {
        this.plans = res;
      });
  }

  openDialog(edit: boolean, data?: any) {
    const dialogRef = this.dialog.open(PlanFormComponent, {
      width: '500px',
      height: '100vh',
      disableClose: true,
      position: { right: '0px' },
      data: {
        edit,
        data,
      },
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        this.ngOnInit();
      }
    });
  }

  openBeneficiariesById(id: string) {
    this.beneficiaryService.getAllBeneficiaryById(id).subscribe((res: any) => {
       const dialogRef = this.dialog.open(PlanBeneficiaryComponent, {
      width: '1000px',
      height: '100vh',
      disableClose: true,
      position: { right: '0px' },
      data: res,
    });
    dialogRef.afterClosed().subscribe((res: any) => {});
    });
  }

  openPolicy(policy: string) {
    this.policyService.getPolicyByName(policy).subscribe((res: any) => {
      const dialogRef = this.dialog.open(PlanPolicyComponent, {
        width: '1000px',
        height: '100vh',
        disableClose: true,
        position: { right: '0px' },
        data:[res],
      });
      dialogRef.afterClosed().subscribe((res: any) => {});
    })
  }
}
