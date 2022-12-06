import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { take } from 'rxjs';
import { AddService } from 'src/app/services/store-data/add.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  title = 'list';
  id: number;
  temp: number;
  data: any;

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
      this.data = data;
    })
  }

  deleted(x: number) {
    this.addService.deleteData(x).subscribe()
  }
}
