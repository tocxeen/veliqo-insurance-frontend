import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/tools/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  sideBar = [
    { title: 'Users', icon: 'bi-people', link: '/users', role: ['ROLE_ADMIN'] },
    {
      title: 'Applicants',
      icon: 'bi-person',
      link: '/applicants',
      role: ['ROLE_ADMIN'],
    },
    // { title: 'Transactions', icon: 'bi-coin', link: '/transactions' },
    { title: 'Policies', icon: 'bi-book', link: '/policy', role: ['ROLE_ADMIN'] },
    {
      title: 'Beneficiaries',
      icon: 'bi-people',
      link: '/beneficiary',
      role: 'ROLE_APPLICANT',
    },
    { title: 'Life Plans', icon: 'bi-files', link: '/plan', role: ['ROLE_APPLICANT'] },
  ];

  constructor(public authService:AuthService) {}

  ngOnInit() { }
  


}
