import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { ErrorHandleService } from '../services/error-handle/error-handle.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private error: ErrorHandleService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headerAdditional = req.headers.append('x-api-key', '123');
    const newToken = req.clone({
      headers: headerAdditional,
    });

    return next.handle(newToken).pipe(
      catchError((err: any) => {
        console.log(err);
        if (err instanceof HttpErrorResponse) {
          try {
            this.error.handleError(err);
            console.log('error');
          }
          catch (e) {
            console.log('eeeerrror');
            this.error.handleError('error occured');
          }
        }
        return of(err);
      })
    );
  }
}
