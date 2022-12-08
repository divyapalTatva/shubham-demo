import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})

export class AddService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${environment.apiUrl}`);
  }

  addData(info: any) {
    return this.http.post(`${environment.apiUrl}`, {
      info
    });
  }

  deleteData(id: number) {
    return this.http.delete(`${environment.apiUrl}/${id}`);
  }
}
