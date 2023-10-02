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
  updateName(user: any) {
    return this.apis.put(`/user/updateName/${user.email}/${user.name}`);
  }
  changePassword(data: any) {
    return this.apis.put(
      `/user/updatePassword/${data.email}/${data.currentPassword}/${data.newPassword}`
    );
  }
  findByUsername(username: any) {
    return this.apis.get('/user/getUserByEmail/' + username);
  }
  activatOrDeactivate(data: any) {
    return this.apis.get(`/user/activate/${data.email}`);
  }
}
