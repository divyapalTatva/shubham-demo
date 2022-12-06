import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/services/validator/validator.service';
import { AddService } from 'src/app/services/store-data/add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  title = 'add';

  addForm: FormGroup;

  constructor(private fb: FormBuilder, private vs: ValidatorService, private router: Router
    , private addService: AddService) { }

  error(key: string) {
    return this.vs.getError(this.addForm, key);
  }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      uId: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(3)]],
      body: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  userId_F: number;
  title_F: string;
  body_F: string;

  getData() {
    let a = {
      userId: this.userId_F,
      title: this.title_F,
      body: this.body_F
    };
    this.addService.addData(a).subscribe(data => { console.log('in data') });
    console.log(a);
    this.router.navigate(['']);
  }

}