import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from './tools/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'insurance-frontend';

  constructor(public router: Router, public loadingService: LoaderService) {
    console.log(loadingService.isLoading.getValue());
  }
}
