import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserFormComponent } from '../../users/user-form/user-form.component';
import { AuthService, BeneficiaryService } from 'src/app/tools/services';

@Component({
  selector: 'app-form-beneficiary',
  templateUrl: './form-beneficiary.component.html',
  styleUrls: ['./form-beneficiary.component.css'],
})
export class FormBeneficiaryComponent implements OnInit {
  
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    nationalID: new FormControl(''),
    applicantID:new FormControl('')
  });

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private beneficiaryService: BeneficiaryService,
    public authService: AuthService,
  ) {}

  ngOnInit() {
    if (this.data.edit) {
      this.form.patchValue({
        name: this.data.data.name,
        email: this.data.data.email,
        phoneNumber: this.data.data.phoneNumber,
        nationalID: this.data.data.nationalID
      });
    }
  }

  close(): void {
    this.dialogRef.close(false);
  }

  onSubmit() {
    const data = {
      ...this.form.value,
      applicantID:this.authService.getUser()?.username
    }
    !this.data.edit
      ? this.beneficiaryService.addBeneficiary(data).subscribe((res: any) => {
          this.beneficiaryService.autoSuccess();
          this.dialogRef.close(true);
        })
      : this.beneficiaryService
          .updateBeneficiary(data)
          .subscribe((res: any) => {
            this.beneficiaryService.autoSuccess();
            this.dialogRef.close(true);
          });
  }
}
