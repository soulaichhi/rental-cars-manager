import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
})
export class CustomersListComponent {
  //destroy$ = new Subject<void>();
  displayedColumns: string[] = [
    'fullName',
    'entryDate',
    'exitDate',
    'cin',
    'address',
    'phone',
    'blacklist',
  ];
  dataSource$ = this.customersService.customers$;

  constructor(private customersService: CustomersService) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    //this.dataSource$.filter = filterValue.trim().toLowerCase();
  }
}
