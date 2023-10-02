import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/tools/services/auth.service';
import { UserService } from 'src/app/tools/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user: any;
  form = new FormGroup({
    name: new FormControl(''),
    roles: new FormControl(''),
    email: new FormControl(''),
  });

  changePasswordForm = new FormGroup({
    currentPassword: new FormControl(''),
    newPassword: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor(
    public authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  setFields() {
    this.form.patchValue({
      name: this.user.name,
      email: this.user.username,
      roles: this.user.roles,
    });
  }

  getUserDetails() {
    this.userService
      .findByUsername(this.authService.getUser()?.username)
      .subscribe((res: any) => {
        this.user = res;
        this.setFields();
      });
  }

  updatePassword() {
    const form = this.changePasswordForm.value;
    const data = {
      newPassword: form.newPassword,
      currentPassword: form.currentPassword,
      email:this.user?.username
    };

    if(form.newPassword == form.confirmPassword){ 
      return this.userService.changePassword(data).subscribe((res: any) => {
        this.authService.autoSuccess();
    });
    }
    return this.userService.warning('New password and confirm password do not match!');
   
  }

  updateProfile() {
    const form = this.form.value;
    const data = {
      name: form.name,
      email: form.email,
    };
    this.userService.updateName(data).subscribe((res: any) => {
      this.userService.autoSuccess();
      this.ngOnInit();
    });
  }
}
