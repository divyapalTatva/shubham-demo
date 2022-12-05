import { Injectable } from '@angular/core';
import { Iadddata } from 'src/app/pages/model/Iadddata';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  datas: Iadddata[] = [
    { id: 1, name: 'demo', email: 'demo@gmail.com', DOB: '2001-06-12' }
  ]
  constructor() { }

  addSingleData(list: Iadddata) {
    if (!list.id) list.id = this.datas.length + 1
    this.datas.push(list)
  }
}
