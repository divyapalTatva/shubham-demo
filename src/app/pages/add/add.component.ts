import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/service/validator.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addForm: FormGroup;

  maxDate = "";
  minDate = '';

  constructor(private fb: FormBuilder, private ve: ValidatorService) { }

  error(key: string) {
    return this.ve.getError(this.addForm, key)
  }

  ngOnInit(): void {

    this.addForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required,],
      date: ['', Validators.required]
    })

    var dtToday: any = new Date();

    let month: any = dtToday.getMonth() + 1;
    let day: any = dtToday.getDate();
    let year: any = dtToday.getFullYear();
    if (month < 10)
      month = '0' + month.toString();
    if (day < 10)
      day = '0' + day.toString();

    let maxDate1 = year - 18 + '-' + month + '-' + day;
    this.maxDate = maxDate1
    let mindate = year - 50 + '-' + month + '-' + day;
    this.minDate = mindate
  }


  title = 'add'
  getData(data: NgForm) {
    console.warn(data)
  }
}