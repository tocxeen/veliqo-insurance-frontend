import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Applicantservice } from 'src/app/tools/services';

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

  constructor(private applicantService: Applicantservice) {}

  ngOnInit() {}

  onSubmit() {
    const data = {
      ...this.form.value,
      status: 'ACTIVE',
      roles: 'ROLE_APPLICANT',
    };

    this.applicantService.registerApplicant(data).subscribe((res: any) => {
      this.applicantService.autoSuccess();
    });
  }
}
