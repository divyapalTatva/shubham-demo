import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { take } from 'rxjs';
import { AddService } from 'src/app/services/store-data/add.service';
import { MatTableDataSource } from '@angular/material/table';
import { Api } from 'src/app/models/api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  title = 'list';
  id: number;
  temp: number;
  // data: any;
  ds!: Api[];
  dataSource: any;

  constructor(private ar: ActivatedRoute, private router: Router, private addService: AddService) { }

  ngOnInit(): void {
    this.id = Number(this.ar.snapshot.paramMap.get('id'));
    this.temp = this.id;
    if (isNaN(this.temp)) {
      this.router.navigate(['/list']);
    }
    this.getT();
  }

  getT() {
    this.addService.getData().subscribe(data => {
      this.ds = data;
      this.dataSource = new MatTableDataSource(this.ds);
      // console.log(this.ds);
    });
  }

  deleted(x: number) {
    this.addService.deleteData(x).subscribe()
  }
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
}
