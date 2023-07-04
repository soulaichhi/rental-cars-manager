import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

const basePath = 'http://localhost:3000/customers';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customers$ = this.http.get<Customer[]>(basePath);

  constructor(private http: HttpClient) {}
}
