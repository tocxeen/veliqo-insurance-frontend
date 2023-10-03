import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { ApisService } from './apis.service';

@Injectable({
  providedIn: 'root',
})
export class BeneficiaryService extends AlertService {
  constructor(private apis: ApisService) {
    super();
  }

  getAllBeneficiaries() {
    return this.apis.get(`/beneficiary/getBeneficiaries`);
  }

  getAllBeneficiaryByEmail(email: string) {
    return this.apis.get(`/beneficiary/getBeneficiaryByEmail/${email}`);
  }

  addBeneficiary(data: any) {
    return this.apis.post(`/beneficiary/register`, data);
  }
  updateBeneficiary(data: any) {
    return this.apis.put(`/beneficiary/update`, data);
  }
}
