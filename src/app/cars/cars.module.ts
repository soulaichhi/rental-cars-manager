import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarFormComponent } from './car-form/car-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarsService } from './cars.service';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [CarsListComponent, CarFormComponent],
  imports: [
    CommonModule,
    CarsRoutingModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
  ],
  providers: [CarsService],
})
export class CarsModule {}
