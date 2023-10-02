import { Injectable } from '@angular/core';
import { ApisService } from './apis.service';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';

@Injectable({ providedIn: 'root' })
export class AuthService extends AlertService {
  constructor(private apis: ApisService, private router: Router) {
    super();
  }

  login(auth: any) {
    return this.apis.post('/user/generateToken', auth);
  }



  saveToken(res: any) {
    sessionStorage.setItem('token', res.token);
    sessionStorage.setItem('user', JSON.stringify(res));
    this.autoSuccess();

    this.router.navigateByUrl('/dashboard');
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  getUser() {
    let user = sessionStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
    // window.location.reload();
  }

  isLoggedIn():boolean {
    const user = sessionStorage.getItem('token');
   
    if (user !=null) {
      return true;
    }
    return false;
  }

  isAdmin(): boolean {
    return true;
  }
}
