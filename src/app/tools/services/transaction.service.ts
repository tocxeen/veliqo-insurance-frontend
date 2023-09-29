import { Injectable, Inject } from '@angular/core';
import { AlertService } from './alert.service';
import { ApisService } from './apis.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService extends AlertService {
  constructor(private apis: ApisService) {
    super();
  }

  getAllTransactions() {
    return this.apis.get(`/transaction/list`);
  }

  registerTransaction(data: any) {
    return this.apis.post('/transaction', data);
  }
  updateTransaction(data: any) {
    return this.apis.put('/transaction/update', data);
  }
  findByUsername(username: any) {
    return this.apis.put('/transaction/findByUsername/' + username);
  }
}
