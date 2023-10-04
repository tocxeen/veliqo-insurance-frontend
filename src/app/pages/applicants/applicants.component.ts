import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplicantsService, BeneficiaryService, PlansService } from 'src/app/tools/services';
import { ApplicantBeneficiaryComponent } from './applicant-beneficiary/applicant-beneficiary.component';
import { ApplicantPlanComponent } from './applicant-plan/applicant-plan.component';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss'],
})
export class ApplicantsComponent implements OnInit {
  applicants: any;

  constructor(
    public dialog: MatDialog,
    private applicantService: ApplicantsService,
    private beneficiaryService: BeneficiaryService,
    private planService:PlansService
  ) {}

  ngOnInit(): void {
    this.getAllApplicants();
  }

  getAllApplicants() {
    this.applicantService.getAllApplicants().subscribe((res: any) => {
      this.applicants = res;
    });
  }

  openApplicantPlans(email: string) {
       this.planService
      .getApplicantPlans(email)
      .subscribe((res: any) => {
        const dialogRef = this.dialog.open(ApplicantPlanComponent, {
          width: '1000px',
          height: '100vh',
          disableClose: true,
          position: { right: '0px' },
          data: res,
        });
        dialogRef.afterClosed().subscribe((res: any) => {});
      });
  
  }

  openApplicantBeneficiary(email: string) {
    this.beneficiaryService
      .getApplicantBeneficiaries(email)
      .subscribe((res: any) => {
        const dialogRef = this.dialog.open(ApplicantBeneficiaryComponent, {
          width: '1000px',
          height: '100vh',
          disableClose: true,
          position: { right: '0px' },
          data: res,
        });
        dialogRef.afterClosed().subscribe((res: any) => {});
      });
  }
}
