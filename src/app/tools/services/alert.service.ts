import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './loader.service';
import Swal from 'sweetalert2';

@Injectable()
export class AlertService extends LoaderService {
  triggerUpdate = new BehaviorSubject(false);

  success(message: string) {
    Swal.fire({
      title: 'Success',
      icon: 'success',
      text: message,
      showCancelButton: true,
    });
  }

  warning(message: string) {
    Swal.fire({
      title: 'Warning',
      icon: 'warning',
      text: message,
      showCancelButton: true,
    });
  }

  error(message: string) {
    Swal.fire({
      title: 'Error',
      icon: 'error',
      text: message,
      showCancelButton: true,
    });
  }

  autoSuccess() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      text: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
  }


}
