import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-applicant-beneficiary',
  templateUrl: './applicant-beneficiary.component.html',
  styleUrls: ['./applicant-beneficiary.component.css'],
})
export class ApplicantBeneficiaryComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ApplicantBeneficiaryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data);
  }

  close() {
    this.dialogRef.close(false);
  }
}
