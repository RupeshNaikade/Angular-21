import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from './product.modal';

@Injectable({
  providedIn: 'root',
})
export class ProductService {


  sub = new Subject<any>();
  sub$ = this.sub.asObservable();




  constructor(public http: HttpClient) {
    this.sub.next('Hello from ProductService!');



    this.sub.subscribe((message) => {
      console.log('*************************88Received message in ProductService:', message);
    });

  }


  getProductList() {
    return this.http.get('https://dummyjson.com/products')
  }

  private itemSubject = new Subject<Product>();

  itemSubject$ = this.itemSubject.asObservable();

  setItem(item: Product) {
    this.itemSubject.next(item);
  }

  getItem() {
    return this.itemSubject.asObservable();
  }


  private itemSubBehaviorSubject = new BehaviorSubject<Product | null>(null);

  itemSubBehaviorSubject$ = this.itemSubBehaviorSubject.asObservable();

  setItemWithBehaviorSubject(item: Product) {
    this.itemSubBehaviorSubject.next(item);
  }

  getItemWithBehaviorSubject() {
    return this.itemSubBehaviorSubject.asObservable();
  }

}
