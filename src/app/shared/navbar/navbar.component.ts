import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/tools/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
}
