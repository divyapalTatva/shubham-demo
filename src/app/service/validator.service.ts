import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public getError(fm: FormGroup, key: string) {
    if (fm.get(key)?.invalid && fm.get(key)?.touched) {
      switch (key) {
        case 'email':
          if (fm.get('email')?.hasError('required')) {
            return 'please enter valid email...'
          }
          if (fm.get('email')?.hasError('email')) {
            return 'your email is wrong email contains one "@" and one "."  '
          }
          return ''
        case 'name':
          return 'please enter valid name...'
        case 'date':
          return 'please select date...'
      }
    }
    return '';
  }
  constructor() { }
}
