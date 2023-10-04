import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApplicantsService } from 'src/app/tools/services';
import { AuthService } from 'src/app/tools/services/auth.service';
import { UserService } from 'src/app/tools/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user: any;
  applicant: any;
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

  profile = new FormGroup({
    email: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    zipCode: new FormControl(''),
    country: new FormControl(''),
    dob: new FormControl(''),
    sex: new FormControl(''),
    marriageStatus: new FormControl(''),
    balance: new FormControl('0'),
  });

  constructor(
    public authService: AuthService,
    private userService: UserService,
    private applicantService: ApplicantsService
  ) {}

  ngOnInit(): void {
    this.getUserDetails();
    if (this.authService.getUser()?.roles == 'ROLE_APPLICANT') {
      this.getApplicantDetails();
    }
  }

  setFields() {
    this.form.patchValue({
      name: this.user.name,
      email: this.user.username,
      roles: this.user.roles,
    });
    this.profile.patchValue({
      email: this.user.username,
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
      email: this.user?.username,
    };

    if (form.newPassword == form.confirmPassword) {
      return this.userService.changePassword(data).subscribe((res: any) => {
        this.authService.autoSuccess();
      });
    }
    return this.userService.warning(
      'New password and confirm password do not match!'
    );
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

  // applicant data

  setApplicantsFields() {
    this.profile.patchValue({
      street: this.applicant.street,
      city: this.applicant.city,
      zipCode: this.applicant.zipCode,
      country: this.applicant.country,
      dob: this.applicant.dob,
      sex: this.applicant.sex,
      marriageStatus: this.applicant.marriageStatus,
    });
  }

  updateApplicant() {
    this.applicant
      ? this.applicantService
          .updateApplicant(this.profile.value)
          .subscribe((res: any) => {
            this.applicantService.autoSuccess();
            this.ngOnInit();
          })
      : this.applicantService
          .registerApplicant(this.profile.value)
          .subscribe((res: any) => {
            this.applicantService.autoSuccess();
            this.ngOnInit();
          });
  }

  getApplicantDetails() {
    this.applicantService
      .findByUsername(this.authService.getUser()?.username)
      .subscribe((res: any) => {
        this.applicant = res;
        this.setApplicantsFields();
      });
  }
}
