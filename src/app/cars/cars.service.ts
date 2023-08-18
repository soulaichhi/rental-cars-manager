import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car';

const basePath = 'http://localhost:3000/cars';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  cars$ = this.http.get<Car[]>(basePath);

  constructor(private http: HttpClient) {}
}
