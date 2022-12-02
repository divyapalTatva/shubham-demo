import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  title = 'list';
  id:any
  temp:any

  constructor(private ar: ActivatedRoute, private r:Router) { }
  ngOnInit(): void {
      this.id=Number(this.ar.snapshot.paramMap.get('id'));
      this.temp=this.id
      if (isNaN(this.temp)) {
        this.r.navigate(['/list']);
      }      
  }
}
// export class list{}
