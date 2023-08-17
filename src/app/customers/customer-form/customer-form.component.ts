import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  rentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.rentForm = this.fb.group({
      personalInfo: this.fb.group({
        prenom: ['', Validators.required],
        nom: ['', Validators.required],
        dateNaissance: ['', Validators.required],
        cin: ['', Validators.required],
        address: ['', Validators.required],
        phone: ['', Validators.required],
      }),
      secondDriver: this.fb.group({
        prenom: [''],
        nom: [''],
        dateNaissance: [''],
        cin: [''],
      }),
      carInfo: this.fb.group({
        marque: ['', Validators.required],
        immatriculation: ['', Validators.required],
        modele: [2022, Validators.required],
        entryDate: ['', Validators.required],
        exitDate: ['', Validators.required],
      }),
    });
  }

  submitForm() {
    const customer: Customer = {};
  }
}
