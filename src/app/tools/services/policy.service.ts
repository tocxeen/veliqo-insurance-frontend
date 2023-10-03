import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { ApisService } from './apis.service';

@Injectable({
  providedIn: 'root'
})
export class PolicyService extends AlertService {
  constructor(private apis: ApisService) {
    super();
  }

  getAllPolicies() {
    return this.apis.get(`/policy/getPolicies`);
  }

  addPolicy(policy: any) {
    return this.apis.post('/policy/register', policy);
  }
  
}
