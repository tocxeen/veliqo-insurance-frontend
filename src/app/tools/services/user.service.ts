import { Injectable, Inject } from '@angular/core';
import { AlertService } from './alert.service';
import { ApisService } from './apis.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends AlertService {
  constructor(private apis: ApisService) {
    super();
  }

  getAllUsers() {
    return this.apis.get(`/user/list`);
  }

  registerUser(user: any) {
    return this.apis.post('/user', user);
  }
  updateUser(user: any) {
    return this.apis.put('/user/update', user);
  }
  changePassword(data: any) {
    return this.apis.put('/user/changePassword', data);
  }
  findByUsername(username: any) {
    return this.apis.get('/user/getUserByEmail/' + username);
  }
  activatOrDeactivate(data: any) {
    return this.apis.get(`/user/activate/${data.email}`);
  }
}
