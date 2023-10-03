import { Component, OnInit } from '@angular/core';
import { FormBeneficiaryComponent } from './form-beneficiary/form-beneficiary.component';
import { BeneficiaryService } from 'src/app/tools/services';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css'],
})
export class BeneficiaryComponent implements OnInit {
  beneficiaries: any;
  
  constructor(
    private beneficiaryService: BeneficiaryService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllBeneficiaries();
  }

  getAllBeneficiaries() {
    this.beneficiaryService.getAllBeneficiaries().subscribe((res: any) => {
      this.beneficiaries = res;
    });
  }

  openDialog(edit: boolean, data?: any) {
    const dialogRef = this.dialog.open(FormBeneficiaryComponent, {
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
