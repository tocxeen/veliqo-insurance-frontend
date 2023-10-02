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
    email:new FormControl('')
  });

  changePasswordForm = new FormGroup({
    password: new FormControl(''),
    cpassword: new FormControl(''),
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
      roles:this.user.roles
    })
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
    const data = {};
    this.userService.changePassword(data).subscribe((res: any) => {});
  }

  updateProfile() {
    const data = {};
    this.userService.updateUser(data).subscribe((res: any) => {});
  }
}
