import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { DataSourceProduct } from './data-source';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  dataSource = new DataSourceProduct();
  columns: string[] = ['#No', 'name', 'price', 'cover', 'actions'];
  total = 0;
  input = new FormControl('', { nonNullable: true });
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data: Product[]) => this.dataSource.init(data));

    this.total = this.dataSource.getTotal();

    this.input.valueChanges
      .pipe(debounceTime(3000))
      .subscribe((value: string) => this.dataSource.find(value));
  }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }
}
