import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BeneficiaryService, ApplicantsService, PolicyService, AuthService, PlansService } from 'src/app/tools/services';

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.css'],
})
export class PlanFormComponent implements OnInit {
  beneficiaries: any;
  applicants: any;
  policies: any;

  form = new FormGroup({
    policy: new FormControl(''),
    beneficiaryEmail: new FormControl(''),
    applicantEmail: new FormControl(''),
    id:new FormControl('0')
  });

  constructor(
    private beneficiaryService: BeneficiaryService,
    private applicantService: ApplicantsService,
    private policyService: PolicyService,
    private planService:PlansService,
    private authService: AuthService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PlanFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  
  close() {
    this.dialogRef.close(false);
  }

  ngOnInit() {
    this.getAllPolicies();
    this.getApplicantBeneficiaries();
  }

  getApplicantBeneficiaries() {
    this.beneficiaryService
      .getApplicantBeneficiaries(this.authService.getUser()?.username)
      .subscribe((res: any) => {
        this.beneficiaries = res;
      });
  }

  getAllPolicies() {
    this.policyService.getAllPolicies().subscribe((res: any) => {
      this.policies = res;
    });
  }

  onSubmit() {
    const data = {
      ...this.form.value,
      applicantEmail:this.authService.getUser()?.username
    }

    this.planService.addPlan(data).subscribe((res: any) => {
      this.planService.autoSuccess();
      this.dialogRef.close(true);
    })
  }
}
