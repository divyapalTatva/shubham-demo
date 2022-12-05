import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { AddService } from 'src/app/service/storedata/add.service';
import { Iadddata } from '../model/Iadddata';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  title = 'list';
  id: any
  temp: any

  datas!: Iadddata[];
  constructor(private ar: ActivatedRoute, private r: Router, private addservice: AddService) { }
  ngOnInit(): void {
    this.id = Number(this.ar.snapshot.paramMap.get('id'));
    this.temp = this.id
    if (isNaN(this.temp)) {
      this.r.navigate(['/list']);
    }
    this.datas = this.addservice.datas;

  }
  deleted() {

  }
}
// export class list{}
