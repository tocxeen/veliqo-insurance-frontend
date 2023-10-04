import { Injectable, Inject } from '@angular/core';
import { AlertService } from './alert.service';
import { ApisService } from './apis.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicantsService extends AlertService {
  constructor(private apis: ApisService) {
    super();
  }

  getAllApplicants() {
    return this.apis.get(`/applicant/getApplicants`);
  }

  registerApplicantAccount(data: any) {
    return this.apis.post('/applicant/registerApplicantAccount', data);
  }

  registerApplicant(data: any) {
    return this.apis.post('/applicant/register', data);
  }

  updateApplicant(data: any) {
    return this.apis.put('/applicant/update', data);
  }

  findByUsername(username: any) {
    return this.apis.get('/applicant/getApplicantByEmail/'+username);
  }
}
