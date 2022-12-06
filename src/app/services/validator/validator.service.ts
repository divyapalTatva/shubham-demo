import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public getError(fm: FormGroup, key: string) {
    const control = fm.get(key)

    if (control && control.invalid && control.touched) {
      console.log(control)

      if (control.hasError('required')) {
        return 'this field is required...';
      }

      if (control.hasError('email')) {
        return 'your email is wrong email contains one "@" and one "." ';
      }

      if (control.hasError('minlength')) {
        return 'min length required 3';
      }
    }
    return '';
  }

  constructor() { }
}
