import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AddService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  addData(info: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {
      info
    });
  }

  deleteData(id: number) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + id);
  }
}
