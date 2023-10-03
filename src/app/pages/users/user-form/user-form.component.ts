import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { UserService } from 'src/app/tools/services';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    roles: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService:UserService
  ) {}

  close(): void {
    this.dialogRef.close(false);
  }
  ngOnInit() {
    if (this.data.edit) {
      this.updateInit();
    }
  }

  updateInit() {
    this.form.patchValue({
      name: this.data.data.name,
      username: this.data.data.username,
      roles: this.data.data.roles,
      password:'************************'
    })
  }

  onSubmit() {

    const user = {
      ...this.form.value,
      roles: 'ROLE_ADMIN',
      status:'ACTIVE'
    };
    const data = {
      name: this.form.value.name,
      email: this.form.value.username,
    };

    this.data.edit ?
      this.userService.updateName(data).subscribe((res: any) => {
        this.userService.autoSuccess();
        this.dialogRef.close(true);
      })
    :
    this.userService.registerUser(user).subscribe((res: any) => {
      this.userService.autoSuccess();
      this.dialogRef.close(true);
    });
  }
}
