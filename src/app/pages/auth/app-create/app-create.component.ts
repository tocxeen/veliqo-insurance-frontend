import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApplicantsService } from 'src/app/tools/services';

@Component({
  selector: 'app-app-create',
  templateUrl: './app-create.component.html',
  styleUrls: ['./app-create.component.css'],
})
export class AppCreateComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    status: new FormControl(''),
    roles: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private applicantService: ApplicantsService) {}

  ngOnInit() {}

  onSubmit() {
    const data = {
      ...this.form.value,
      status: 'ACTIVE',
      roles: 'ROLE_APPLICANT',
    };

    this.applicantService
      .registerApplicantAccount(data)
      .subscribe((res: any) => {
        this.applicantService.autoSuccess();
      });
  }
}
