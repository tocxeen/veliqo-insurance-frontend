import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-plan-beneficiary',
  templateUrl: './plan-beneficiary.component.html',
  styleUrls: ['./plan-beneficiary.component.css'],
})
export class PlanBeneficiaryComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PlanBeneficiaryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data);
  }

  close() {
    this.dialogRef.close(false);
  }
}
