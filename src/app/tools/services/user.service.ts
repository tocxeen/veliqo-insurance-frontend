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
    return this.apis.get(`/user/getUsers`);
  }

  registerUser(user: any) {
    return this.apis.post('/user/add', user);
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
  activatOrDeactivate(email:string) {
    return this.apis.put(`/user/updateStatus/${email}`);
  }

  getNumberOfUsers() {
    return this.apis.get('/user/numberOfUsers');
  }
}
