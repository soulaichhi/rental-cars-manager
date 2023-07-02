import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss'],
})
export class CarFormComponent implements OnInit {
  carForm!: FormGroup;
  private srcResult: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.carForm = this.formBuilder.group({
      name: ['', Validators.required],
      model: ['', Validators.required],
      registration: ['', Validators.required],
    });
  }

  addCar() {
    console.log(this.carForm.value);
  }
}
