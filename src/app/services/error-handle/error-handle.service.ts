import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {

  constructor(private toaster: ToastrService) { }

  public handleError(err: any) {
    let errMessage: string;

    if (err.error instanceof ErrorEvent) {
      errMessage = `An error occured:${err.error.message}`;
    }

    else {
      switch (err.status) {
        case 400:
          errMessage = `${err.status}:Bad request`;
          break;
        case 401:
          errMessage = `${err.status}:You are unauthorised.`;
          break;
        case 403:
          errMessage = `${err.status}:You don't have permission to access.`;
          break;
        case 404:
          errMessage = `${err.status}:Resource does not exists.`;
          break;
        case 500:
          errMessage = `${err.status}:Internal server error.`;
          break;
        default:
          errMessage = `somthing went wrong.`
      }
    }
    console.log(errMessage, 'errMessage');
  }
}
