import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from '../services';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (
      !request.url.includes('get')
    ) {
      this.loaderService.show();
    }

    return next.handle(request).pipe(finalize(() => this.loaderService.hide()));
  }
}
