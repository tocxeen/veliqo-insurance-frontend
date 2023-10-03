import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/tools/services';
import { PolicyFormComponent } from './policy-form/policy-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css'],
})
export class PolicyComponent implements OnInit {
  policies: any;

  constructor(private policyService: PolicyService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getAllPolicies();
  }

  getAllPolicies() {
    this.policyService.getAllPolicies().subscribe((res: any) => {
      this.policies = res;
    });
  }

  openDialog(edit: boolean, data?: any) {
    const dialogRef = this.dialog.open(PolicyFormComponent, {
      width: '500px',
      height: '100vh',
      disableClose: true,
      position: { right: '0px' },
      data: {
        edit,
        data,
      },
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        this.ngOnInit();
      }
    });
  }
}
