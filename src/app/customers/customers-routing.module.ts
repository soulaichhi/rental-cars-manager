import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { BlacklistCustomersComponent } from './blacklist-customers/blacklist-customers.component';
import { BlacklistFormComponent } from './blacklist-form/blacklist-form.component';

const routes: Routes = [
  { path: '', component: CustomersListComponent },
  { path: 'add-customer', component: CustomerFormComponent },
  { path: 'blacklist', component: BlacklistCustomersComponent },
  { path: 'blacklist/add/:id', component: BlacklistFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
