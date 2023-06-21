import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [CustomersListComponent, CustomerFormComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
})
export class CustomersModule {}
