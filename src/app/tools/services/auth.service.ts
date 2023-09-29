import { Injectable } from '@angular/core';
import { ApisService } from './apis.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { AlertService } from './alert.service';

@Injectable({ providedIn: 'root' })
export class AuthService extends AlertService {
  constructor(private apis: ApisService, private router: Router) {
    super();
  }

  login(auth: any) {
    return this.apis.post('/auth/login', auth);
  }

  decodeToken(token: any) {
    sessionStorage.setItem('token', token);
    const decoded: any = jwt_decode(token);
    this.setTokenData(decoded);

    if (!decoded.isVerified) {
      this.error('Your account was de-activated');
      return null;
    } else {
      sessionStorage.setItem('user', JSON.stringify(decoded));
      this.success('Login successful');
    }
  }

  setTokenData(decoded: any) {
    sessionStorage.setItem('user', JSON.stringify(decoded));
  }

  getDecodedToken(x: any) {
    const decoded: any = jwt_decode(x.token);
    sessionStorage.setItem('token', x.token);
    sessionStorage.setItem('user', JSON.stringify(decoded));
    sessionStorage.setItem('role', JSON.stringify(decoded.type));
    return decoded;
  }

  goToRoute(route: any) {
    this.router.navigate([`/${route}`]);
  }

  logout() {
    sessionStorage.clear();
    sessionStorage.clear();
    this.goToRoute('/');
    window.location.reload();
  }

  isLoggedIn(): boolean {
    const user = sessionStorage.getItem('user');
    if (user) {
      return true;
    }
    return false;
  }

  isAdmin(): boolean {
    return true;
  }
}
