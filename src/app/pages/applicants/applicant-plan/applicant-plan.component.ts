import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApplicantBeneficiaryComponent } from '../applicant-beneficiary/applicant-beneficiary.component';

@Component({
  selector: 'app-applicant-plan',
  templateUrl: './applicant-plan.component.html',
  styleUrls: ['./applicant-plan.component.css'],
})
export class ApplicantPlanComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ApplicantPlanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data)
  }

  close() {
    this.dialogRef.close(false);
  }
}
