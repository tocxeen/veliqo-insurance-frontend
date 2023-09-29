import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  sideBar = [
  
    { title: 'Users', icon: 'bi-people', link: '/users' },
    { title: 'Applicants', icon: 'bi-person', link: '/applicants' },
    { title: 'Transactions', icon: 'bi-coin', link: '/transactions' },
    { title: 'Other', icon: '', link: 'other' },
  ];
  constructor() {}

  ngOnInit() {}
}
