import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Observable } from 'rxjs';
import { Car } from '../car';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
})
export class CarsListComponent implements OnInit {
  cars$!: Observable<Car[]>;

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.cars$ = this.carsService.cars$;
  }

  updateCar() {}

  deleteCar() {}
}
