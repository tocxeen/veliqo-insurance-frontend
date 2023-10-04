import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-plan-policy',
  templateUrl: './plan-policy.component.html',
  styleUrls: ['./plan-policy.component.css'],
})
export class PlanPolicyComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PlanPolicyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
  }

  close() {
    this.dialogRef.close(false);
  }
}
