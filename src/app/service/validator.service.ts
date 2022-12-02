import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public getError(fm: FormGroup, key: string) {
    const control = fm.get(key)
    if (control && control.invalid && control.touched) {
      if (control.hasError('required')) {
        return 'this field is required...'
      }
      if (control.hasError('email')) {
        return 'your email is wrong email contains one "@" and one "." '
      }
    }
    return '';
  }
  constructor() { }
}
