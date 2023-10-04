import { Component, OnInit } from '@angular/core';
import { ApplicantsService } from 'src/app/tools/services';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss'],
})
export class ApplicantsComponent implements OnInit {
  applicants: any;

  constructor(private applicantService: ApplicantsService) {}

  ngOnInit(): void {
    this.getAllApplicants();
  }

  getAllApplicants() {
    this.applicantService.getAllApplicants().subscribe((res: any) => {
      this.applicants = res;
    });
  }

  openApplicantPlans(email: string) {}

  openApplicantBeneficiary(email:string) {
    
  }
}
