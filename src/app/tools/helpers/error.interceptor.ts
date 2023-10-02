import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { delay, mergeMap, Observable, of, retry, retryWhen } from 'rxjs';
import { AlertService, LoaderService } from '../services';



export const maxRetries = 0;
export const delayMs = 2000;

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(public alertService: AlertService ,private loadingService:LoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retryWhen((error) => {
        return error.pipe(
          mergeMap((error, index) => {
            if (error.status === 404) {
              this.alertService.error('Record not found!');
              this.loadingService.hide();
                 return '';
            }
             else if (error.status === 500) {
                this.alertService.error('Oops something went wrong, try later.');
                this.loadingService.hide();
                return '';
              } else if (index < maxRetries && error.status !== 200) {
                this.alertService.error(error.error?.message);
                this.loadingService.hide();
                return of(error).pipe(delay(delayMs));
              } else {
                return '';
              }
          })
        );
      })
    );
  }
}
