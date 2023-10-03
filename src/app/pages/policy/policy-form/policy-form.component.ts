import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserFormComponent } from '../../users/user-form/user-form.component';
import { FormControl, FormGroup } from '@angular/forms';
import { PolicyService } from 'src/app/tools/services';

@Component({
  selector: 'app-policy-form',
  templateUrl: './policy-form.component.html',
  styleUrls: ['./policy-form.component.css'],
})
export class PolicyFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    amount: new FormControl(''),
    currency:new FormControl('')
  });

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private policyService:PolicyService
  ) {}

  ngOnInit() {
    if (this.data.edit) {
      this.form.patchValue({
        name: this.data.data.name,
        amount: this.data.data.amount,
        currency: this.data.data.currency
      });
    }
  }

  close(): void {
    this.dialogRef.close(false);
  }

  onSubmit() {
    !this.data.edit
      ? this.policyService.addPolicy(this.form.value).subscribe((res: any) => {
          this.policyService.autoSuccess();
          this.dialogRef.close(true);
        })
      : this.policyService
          .updatePolicy(this.form.value)
          .subscribe((res: any) => {
            this.policyService.autoSuccess();
            this.dialogRef.close(true);
          });
  }
}
