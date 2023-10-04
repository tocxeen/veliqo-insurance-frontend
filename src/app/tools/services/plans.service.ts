import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { ApisService } from './apis.service';

@Injectable({
  providedIn: 'root',
})
export class PlansService extends AlertService {
  constructor(private apis: ApisService) {
    super();
  }

  getBeneficiaryPlans(email:string) {
    return this.apis.get(`/plan/getBeneficiaryPlans/${email}`);
  }

  getApplicantPlans(email:string) {
    return this.apis.get(`/plan/getApplicantPlans/${email}`);
  }

  addPlan(data: any) {
    return this.apis.post('/plan/register', data);
  }

}
